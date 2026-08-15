// نظام إدارة المظهر (Light Mode فقط)
const ThemeManager = {
  // المتغيرات المتاحة
  STORAGE_KEY: 'theme-preference',
  LIGHT_MODE: 'light',

  // دائمًا نُرجع الوضع النهاري — تم إزالة الوضع الداكن
  getPreference() {
    return this.LIGHT_MODE;
  },

  // تعيين المظهر (سيجبر دائمًا على الوضع النهاري)
  setTheme() {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('data-theme', 'light');
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    try {
      localStorage.setItem(this.STORAGE_KEY, this.LIGHT_MODE);
    } catch (e) {
      // تجاهل أخطاء التخزين (مثلاً في وضع الخصوصية)
    }
    this.updateThemeToggle();
  },

  // تم تعطيل التبديل لأن الوضع الداكن أُلغي
  toggle() {
    // no-op
    console.warn('تم تعطيل التبديل: وضع الداكن تم إزالته.');
  },

  // تحديث مظهر الزر ليعرض فقط الوضع النهاري ويعطّل التفاعل
  updateThemeToggle() {
    const toggle = document.querySelector('[data-theme-toggle]');
    if (!toggle) return;

    toggle.innerHTML = '☀️ Light Mode';
    toggle.setAttribute('aria-label', 'الوضع النهاري مفعل');
    // تعطل الزر لمنع التفاعل
    try {
      toggle.disabled = true;
    } catch (e) {
      // بعض العناصر ليست أزراراً — نزيل مستمعي النقر بدلًا من ذلك
      const newToggle = toggle.cloneNode(true);
      toggle.parentNode.replaceChild(newToggle, toggle);
    }
  },

  // تهيئة النظام
  init() {
    this.setTheme();

    // إذا وُجد زر التبديل، نضمن أنه لا يستجيب للنقرات
    const toggle = document.querySelector('[data-theme-toggle]');
    if (toggle) {
      // إزالة أي مستمعي حدث للنقر عن طريق استبدال العنصر
      const newToggle = toggle.cloneNode(true);
      toggle.parentNode.replaceChild(newToggle, toggle);
      this.updateThemeToggle();
    }
  }
};

// تهيئة النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
});
