window.SWM = window.SWM || {};

SWM.state = {
  data: null
};

/* =========================================================
   روابط إضافية خاصة بالموقع
   ========================================================= */

SWM.extraResources = [

  {
    id: "karam-main-drive",

    title:
      "التلخيصات + الكامل + الشروحات + التصنيفات + الكتب وحلولها",

    subject: "عام",

    branch: "all",

    year: 2026,

    type: "folder",

    category: "مصادر ابو ابراهيم - كرم",

    unit: "",

    description:
      "مجلد شامل يحتوي على التلخيصات والكامل والشروحات والتصنيفات والكتب وحلولها وغيرها من الموارد.",

    url:
      "https://drive.google.com/drive/folders/1acYLT1EV09ZoNHXHInSaYL9umg2t2_y1",

    tags: [
      "تلخيصات",
      "شروحات",
      "كتب",
      "حلول",
      "تصنيفات"
    ],

    dateAdded: "2026-08-15",

    source:
      "Google Drive"
  },

  {
    id: "experimental-2026-scientific",

    title:
      "تجميع امتحانات تجريبي 2026 - علمي",

    subject: "عام",

    branch: "scientific",

    year: 2026,

    type: "exam",

    category: "امتحانات تجريبية 2026",

    unit: "",

    description:
      "مجلد تجميع امتحانات تجريبية لطلاب الفرع العلمي لعام 2026.",

    url:
      "https://drive.google.com/drive/folders/1TrUDqPlK6ly-XOjE5Y99zaGmafSHPBf8?usp=sharing",

    tags: [
      "تجريبي",
      "2026",
      "علمي"
    ],

    dateAdded: "2026-08-15",

    source:
      "Google Drive"
  },

  {
    id: "experimental-2026-literary",

    title:
      "تجميع امتحانات تجريبي 2026 - أدبي",

    subject: "عام",

    branch: "literary",

    year: 2026,

    type: "exam",

    category: "امتحانات تجريبية 2026",

    unit: "",

    description:
      "مجلد تجميع امتحانات تجريبية لطلاب الفرع الأدبي لعام 2026.",

    url:
      "https://drive.google.com/drive/folders/1sfgkxYMw3KG3b6NhpdE7I0XQ2FLqhaYK",

    tags: [
      "تجريبي",
      "2026",
      "أدبي"
    ],

    dateAdded: "2026-08-15",

    source:
      "Google Drive"
  },

  {
    id: "tawjihi-2026-gaza-source",

    title:
      "تجميعة توجيهي غزة 2026 - الملازم والروابط",

    subject: "عام",

    branch: "all",

    year: 2026,

    type: "external",

    category: "مصدر خارجي",

    unit: "",

    description:
      "المصدر الذي يتم الرجوع إليه للوصول إلى الملازم والروابط والمواد والتجميعات.",

    url:
      "https://anaspal.github.io/tawjihi-2026-gaza/",

    tags: [
      "توجيهي",
      "2026",
      "غزة",
      "ملازم",
      "روابط"
    ],

    dateAdded: "2026-08-15",

    source:
      "anaspal"
  }

];


/* =========================================================
   تحميل البيانات
   ========================================================= */

SWM.loadData = async function () {

  if (SWM.state.data) {
    return SWM.state.data;
  }

  try {

    let res =
      await fetch(
        'data/content.json',
        {
          cache: 'no-store'
        }
      );

    if (!res.ok) {

      res =
        await fetch(
          '/Study-With-Me-/data/content.json',
          {
            cache: 'no-store'
          }
        );

    }

    if (!res.ok) {
      throw new Error(
        `HTTP ${res.status}`
      );
    }

    const data =
      await res.json();

    /*
      دمج الروابط الإضافية مع المحتوى الحالي
      بدون حذف البيانات القديمة.
    */

    const existingIds =
      new Set(
        (data.resources || [])
          .map(r => r.id)
      );

    const newResources =
      SWM.extraResources.filter(
        r => !existingIds.has(r.id)
      );

    data.resources = [
      ...newResources,
      ...(data.resources || [])
    ];

    SWM.state.data = data;

    console.log(
      '✓ تم تحميل المحتوى بنجاح'
    );

    return data;

  } catch (err) {

    console.error(
      'Failed to load content.json:',
      err
    );

    const box =
      document.querySelector(
        '[data-load-error]'
      );

    if (box) {

      box.hidden = false;

      box.textContent =
        `تعذر تحميل المحتوى: ${err.message}`;

    }

    return null;
  }
};


/* =========================================================
   حماية النصوص
   ========================================================= */

SWM.esc = function (v = '') {

  return String(v).replace(
    /[&<>'"]/g,
    c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[c])
  );

};


/* =========================================================
   أسماء الفروع
   ========================================================= */

SWM.branchName = function (
  data,
  id
) {

  return (
    data?.branches?.find(
      x => x.id === id
    )?.name ||
    (
      id === 'all'
        ? 'كل الفروع'
        : id || ''
    )
  );

};


/* =========================================================
   أيقونات المصادر
   ========================================================= */

SWM.resourceIcon = function (
  type
) {

  return ({
    folder: '📂',
    pdf: '📄',
    exam: '📝',
    quiz: '📝',
    form: '📝',
    document: '📑',
    telegram: '✈️',
    external: '🔗',
    'online-exam': '📝',
    video: '🎬'
  }[type] || '📎');

};


/* =========================================================
   أسماء الأنواع
   ========================================================= */

SWM.typeName = function (
  type
) {

  return ({
    folder: 'مجلد',
    pdf: 'PDF',
    exam: 'اختبار',
    quiz: 'اختبار',
    form: 'Google Forms',
    document: 'Google Docs',
    telegram: 'Telegram',
    external: 'مصدر خارجي',
    'online-exam': 'اختبار إلكتروني'
  }[type] || type);

};


/* =========================================================
   المفضلة
   ========================================================= */

SWM.getFavorites = function (
  key = 'swm-favorites'
) {

  try {

    return JSON.parse(
      localStorage.getItem(key) || '[]'
    );

  } catch {

    return [];

  }

};


SWM.toggleFavorite = function (
  id,
  key = 'swm-favorites'
) {

  const set =
    new Set(
      SWM.getFavorites(key)
    );

  if (set.has(id)) {

    set.delete(id);

  } else {

    set.add(id);

  }

  localStorage.setItem(
    key,
    JSON.stringify([...set])
  );

  return set.has(id);

};


SWM.isFavorite = (
  id,
  key = 'swm-favorites'
) =>
  SWM.getFavorites(key)
    .includes(id);
