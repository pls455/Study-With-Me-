// نظام إدارة المظهر (Light/Dark Mode)
const ThemeManager = {
  // المتغيرات المتاحة
  STORAGE_KEY: 'theme-preference',
  LIGHT_MODE: 'light',
  DARK_MODE: 'dark',
  
  // الحصول على المظهر المفضل من التخزين أو المتصفح
  getPreference() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      return stored;
    }
    
    // إذا لم يكن هناك تفضيل محفوظ، استخدم تفضيل النظام
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return this.LIGHT_MODE;
    }
    
    return this.DARK_MODE;
  },
  
  // تعيين المظهر
  setTheme(theme) {
    const htmlElement = document.documentElement;
    
    if (theme === this.LIGHT_MODE) {
      htmlElement.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    }
    
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.updateThemeToggle(theme);
  },
  
  // تبديل المظهر
  toggle() {
    const current = localStorage.getItem(this.STORAGE_KEY) || this.getPreference();
    const newTheme = current === this.LIGHT_MODE ? this.DARK_MODE : this.LIGHT_MODE;
    this.setTheme(newTheme);
  },
  
  // تحديث مظهر الزر
  updateThemeToggle(theme) {
    const toggle = document.querySelector('[data-theme-toggle]');
    if (!toggle) return;
    
    if (theme === this.LIGHT_MODE) {
      toggle.innerHTML = '🌙 Dark Mode';
      toggle.setAttribute('aria-label', 'تفعيل الوضع الليلي');
    } else {
      toggle.innerHTML = '☀️ Light Mode';
      toggle.setAttribute('aria-label', 'تفعيل الوضع النهاري');
    }
  },
  
  // تهيئة النظام
  init() {
    const preference = this.getPreference();
    this.setTheme(preference);
    
    // إضافة مستمع الحدث للزر
    const toggle = document.querySelector('[data-theme-toggle]');
    if (toggle) {
      toggle.addEventListener('click', () => this.toggle());
    }
    
    // الاستماع لتغيير تفضيل النظام
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
          const newTheme = e.matches ? this.LIGHT_MODE : this.DARK_MODE;
          this.setTheme(newTheme);
        }
      });
    }
  }
};

// تهيئة النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
});
