window.SWM = window.SWM || {};

SWM.state = {
  data: null
};

/* =========================================================
   روابط إضافية خاصة بالموقع
   ========================================================= */

SWM.extraResources = [

  /* =======================================================
     مصادر عامة
     ======================================================= */

  {
    id: "karam-main-drive",
    title: "التلخيصات + الكامل + الشروحات + التصنيفات + الكتب وحلولها",
    subject: "عام",
    branch: "all",
    year: 2026,
    type: "folder",
    category: "مصادر أبو إبراهيم - كرم",
    unit: "",
    description: "مجلد شامل يحتوي على التلخيصات والكامل والشروحات والتصنيفات والكتب وحلولها وغيرها من الموارد.",
    url: "https://drive.google.com/drive/folders/1acYLT1EV09ZoNHXHInSaYL9umg2t2_y1",
    tags: ["تلخيصات", "شروحات", "كتب", "حلول", "تصنيفات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "experimental-2026-scientific",
    title: "تجميع امتحانات تجريبي 2026 - علمي",
    subject: "عام",
    branch: "scientific",
    year: 2026,
    type: "exam",
    category: "امتحانات تجريبية 2026",
    unit: "",
    description: "مجلد تجميع امتحانات تجريبية لطلاب الفرع العلمي لعام 2026.",
    url: "https://drive.google.com/drive/folders/1TrUDqPlK6ly-XOjE5Y99zaGmafSHPBf8?usp=sharing",
    tags: ["تجريبي", "2026", "علمي"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "experimental-2026-literary",
    title: "تجميع امتحانات تجريبي 2026 - أدبي",
    subject: "عام",
    branch: "literary",
    year: 2026,
    type: "exam",
    category: "امتحانات تجريبية 2026",
    unit: "",
    description: "مجلد تجميع امتحانات تجريبية لطلاب الفرع الأدبي لعام 2026.",
    url: "https://drive.google.com/drive/folders/1sfgkxYMw3KG3b6NhpdE7I0XQ2FLqhaYK",
    tags: ["تجريبي", "2026", "أدبي"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "tawjihi-2026-gaza-source",
    title: "تجميعة توجيهي غزة 2026 - الملازم والروابط",
    subject: "عام",
    branch: "all",
    year: 2026,
    type: "external",
    category: "مصدر خارجي",
    unit: "",
    description: "المصدر الذي يتم الرجوع إليه للوصول إلى الملازم والروابط والمواد والتجميعات.",
    url: "https://anaspal.github.io/tawjihi-2026-gaza/",
    tags: ["توجيهي", "2026", "غزة", "ملازم", "روابط"],
    dateAdded: "2026-08-15",
    source: "anaspal"
  },


  /* =======================================================
     التربية الإسلامية
     ======================================================= */

  {
    id: "islamic-book",
    title: "الكتاب المدرسي",
    subject: "التربية الإسلامية",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "كتاب",
    unit: "",
    description: "الكتاب المدرسي الأساسي لمادة التربية الإسلامية.",
    url: "https://drive.google.com/file/d/1khIe_Jp7Fl9Oh6dQokGC3lcZxztVj1U5/view?usp=drivesdk",
    tags: ["كتاب", "التربية الإسلامية"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "islamic-book-solutions",
    title: "حلول الكتاب المدرسي",
    subject: "التربية الإسلامية",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "حلول",
    unit: "",
    description: "حلول تدريبات وأسئلة الكتاب المدرسي لمساعدة الطالب على المراجعة.",
    url: "https://drive.google.com/file/d/1KMPPGcBkWL_-XiUbN-QqJ9iR6uBa2qHw8/view?usp=drivesdk",
    tags: ["حلول", "كتاب"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "mishkat-success",
    title: "كراسة مشكاة النجاح",
    subject: "التربية الإسلامية",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "",
    description: "كراسة تعليمية ومراجعة لمادة التربية الإسلامية.",
    url: "https://drive.google.com/file/d/1KMvjrjbl9rAxs-XHZFx9fE8dYCFXICtT/view?usp=drivesdk",
    tags: ["مشكاة النجاح", "كراسة", "مراجعة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "mishkat-success-supplement",
    title: "ملحق كراسة مشكاة النجاح",
    subject: "التربية الإسلامية",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "",
    description: "ملحق إضافي لكراسة مشكاة النجاح يحتوي على مواد وأسئلة للمراجعة.",
    url: "https://drive.google.com/file/d/19VTQUbm8HWPIIrfNJ7kWMfW0rfEM86B9/view?usp=drivesdk",
    tags: ["مشكاة النجاح", "ملحق"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "islamic-first-mcq",
    title: "كراسة الأول ضع دائرة",
    subject: "التربية الإسلامية",
    branch: "all",
    year: 2026,
    type: "quiz",
    category: "أسئلة وتصنيف",
    unit: "",
    description: "كراسة تدريبية تعتمد على أسئلة الاختيار من متعدد.",
    url: "https://drive.google.com/file/d/1uef1gJ-BAP-xD3oIIfyAdIIOLwN6G-hZ/view?usp=drivesdk",
    tags: ["ضع دائرة", "اختيار من متعدد", "أسئلة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "islamic-experimental-2026",
    title: "تجميعة تجريبي 2026",
    subject: "التربية الإسلامية",
    branch: "all",
    year: 2026,
    type: "exam",
    category: "امتحانات تجريبية",
    unit: "",
    description: "تجميعة امتحانات تجريبية لعام 2026 للتدرب قبل الامتحان.",
    url: "https://drive.google.com/file/d/1UMgmOmFLW7M7i6O-mWVQlcy4GKlYMZOE/view?usp=drivesdk",
    tags: ["تجريبي", "2026", "امتحانات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "islamic-online-tests",
    title: "اختبارات إلكترونية لكل درس",
    subject: "التربية الإسلامية",
    branch: "all",
    year: 2026,
    type: "online-exam",
    category: "اختبارات إلكترونية",
    unit: "",
    description: "اختبارات إلكترونية مخصصة لدروس التربية الإسلامية.",
    url: "https://t.me/M710MS/6542",
    tags: ["اختبارات", "إلكتروني", "Telegram"],
    dateAdded: "2026-08-15",
    source: "Telegram"
  },


  /* =======================================================
     الفيزياء
     ======================================================= */

  {
    id: "physics-book",
    title: "كتاب الفيزياء",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "كتاب",
    unit: "",
    description: "الكتاب المدرسي لمادة الفيزياء.",
    url: "https://drive.google.com/file/d/1DlxnRqLiVPCpUuK3IikpLo3PrqmYav0a/view?usp=drivesdk",
    tags: ["كتاب", "فيزياء"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "physics-book-solutions",
    title: "حلول الكتاب",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "حلول",
    unit: "",
    description: "حلول أسئلة وتمارين كتاب الفيزياء.",
    url: "https://drive.google.com/file/d/1E0cGEEI158PhbifCoS4T_GLyv4jxKzjV/view?usp=drivesdk",
    tags: ["حلول", "فيزياء"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "physics-classification",
    title: "التصنيف وحلوله",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "تصنيف أسئلة",
    unit: "",
    description: "ملف لتصنيف أسئلة الفيزياء مع حلولها حسب الموضوعات.",
    url: "https://drive.google.com/file/d/1WhcHcj8pPIJ1sNullc6N0EbFXVH-OigO/view?usp=drivesdk",
    tags: ["تصنيف", "حلول", "أسئلة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "physics-anwar-folder",
    title: "دوسية أ. أنور ضرغام",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "دوسية / مجلد",
    unit: "",
    description: "مجلد يحتوي على مواد ومراجعات في مادة الفيزياء.",
    url: "https://drive.google.com/drive/folders/1JOqlDJIe4QHR4zqca1cB9M6Pn-CzsIf8",
    tags: ["أنور ضرغام", "دوسية", "مراجعة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "physics-top-students",
    title: "دوسية الأوائل",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "دوسية / مجلد",
    unit: "",
    description: "مواد تعليمية ومراجعات فيزياء مخصصة للتدريب والاستعداد للامتحان.",
    url: "https://drive.google.com/drive/folders/1vBs_SkM91T43yLzPe79Vbs9WrJdlUHFo",
    tags: ["الأوائل", "دوسية", "مراجعة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "physics-maher",
    title: "دوسية الماهر",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "",
    description: "مذكرة مراجعة وتدريب لمادة الفيزياء.",
    url: "https://drive.google.com/file/d/1IrPV_f03sdtMYjTRmD6t6NHe7h8Bfs2W/view?usp=drivesdk",
    tags: ["الماهر", "دوسية"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "physics-professional",
    title: "دوسية المحترف",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "",
    description: "مذكرة تعليمية تساعد في دراسة ومراجعة الفيزياء.",
    url: "https://drive.google.com/file/d/1IUDf-9Taxvm0FLb5glwW4AeDCLJI6HGr/view?usp=drivesdk",
    tags: ["المحترف", "دوسية"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "physics-basheer-summary",
    title: "تلخيص أ. بشير حمو",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "ملخص / مجلد",
    unit: "",
    description: "مجلد يحتوي على تلخيصات لمادة الفيزياء.",
    url: "https://drive.google.com/drive/folders/1JNIqaamBoqIIGW0wslNWwZnIJWtQaQEm",
    tags: ["بشير حمو", "تلخيص"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "physics-momen-summary",
    title: "تلخيص ومراجعة مؤمن الراعي",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "ملخص ومراجعة",
    unit: "",
    description: "مواد تلخيص ومراجعة تساعد الطالب على تثبيت مفاهيم الفيزياء.",
    url: "https://drive.google.com/drive/folders/1JDheklG2rv1xcIPX_aWkeEKcCH8c9PpI",
    tags: ["مؤمن الراعي", "تلخيص", "مراجعة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "physics-abdullah-summary",
    title: "تلخيص أ. عبدالله البوم",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "ملخص / مجلد",
    unit: "",
    description: "مجموعة تلخيصات ومراجعات لمادة الفيزياء.",
    url: "https://drive.google.com/drive/folders/1JIqY0vb4VOf7EdXd089AVrovNztccnqv",
    tags: ["عبدالله البوم", "تلخيص"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "physics-ali-review",
    title: "أسئلة ومراجعة أ. علي طقاطقة",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "أسئلة ومراجعة",
    unit: "",
    description: "مجموعة أسئلة ومواد مراجعة للتدرب على الفيزياء.",
    url: "https://drive.google.com/drive/folders/1JFWvCREEOWr8vmtsJs6iQLWzKNf5jI5k",
    tags: ["علي طقاطقة", "أسئلة", "مراجعة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "physics-experimental",
    title: "الامتحانات التجريبية",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "امتحانات تجريبية",
    unit: "",
    description: "مجموعة امتحانات تجريبية للتدرب على نمط الأسئلة.",
    url: "https://drive.google.com/drive/folders/1HeDLOF7j0ssqLZn-9rl3woMnBCR5jaXi",
    tags: ["امتحانات", "تجريبي"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "physics-ministry",
    title: "الامتحانات الوزارية",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "امتحانات وزارية",
    unit: "",
    description: "مجموعة امتحانات وزارية سابقة لمادة الفيزياء.",
    url: "https://drive.google.com/drive/folders/1FBfIuI4WpZ2OMuI36M8F4YsiQuDnNPck",
    tags: ["وزاري", "امتحانات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "physics-umm-samah",
    title: "كراسة أم سماح دليلك للنجاح - فيزياء 😉",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "كراسة / دوسية",
    unit: "",
    description: "كراسة مراجعة وتدريب لمادة الفيزياء.",
    url: "https://drive.google.com/file/d/1otpr7JKAToxVgXTvgIJc9ggf0gZ7ayff/view?usp=drivesdk",
    tags: ["أم سماح", "كراسة", "مراجعة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },


  /* =======================================================
     تأسيس فيزياء - أ. عبدالله البوم
     ======================================================= */

  {
    id: "physics-foundation-1",
    title: "تأسيس - الحصة الأولى",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "video",
    category: "فيديو تأسيس",
    unit: "التأسيس",
    description: "فيديو ضمن سلسلة تأسيس الفيزياء للمساعدة في بناء الأساسيات.",
    url: "https://youtu.be/r79iSokwEGk",
    tags: ["تأسيس", "عبدالله البوم", "فيديو"],
    dateAdded: "2026-08-15",
    source: "YouTube"
  },

  {
    id: "physics-foundation-2",
    title: "تأسيس - الحصة الثانية",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "video",
    category: "فيديو تأسيس",
    unit: "التأسيس",
    description: "الحصة الثانية من سلسلة تأسيس الفيزياء.",
    url: "https://youtu.be/UjpB506VjwQ",
    tags: ["تأسيس", "عبدالله البوم", "فيديو"],
    dateAdded: "2026-08-15",
    source: "YouTube"
  },

  {
    id: "physics-foundation-3",
    title: "تأسيس - الحصة الثالثة",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "video",
    category: "فيديو تأسيس",
    unit: "التأسيس",
    description: "الحصة الثالثة من سلسلة تأسيس الفيزياء.",
    url: "https://youtu.be/9mxUwDcLSMk",
    tags: ["تأسيس", "عبدالله البوم", "فيديو"],
    dateAdded: "2026-08-15",
    source: "YouTube"
  },

  {
    id: "physics-momentum-1",
    title: "الزخم الخطي والطاقة الحركية 1",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "video",
    category: "شرح فيديو",
    unit: "الزخم والطاقة الحركية",
    description: "شرح للزخم الخطي والطاقة الحركية.",
    url: "https://youtu.be/dK5Yifudsyc",
    tags: ["زخم", "طاقة حركية", "شرح"],
    dateAdded: "2026-08-15",
    source: "YouTube"
  },

  {
    id: "physics-momentum-2",
    title: "الزخم الخطي والطاقة الحركية 2",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "video",
    category: "شرح فيديو",
    unit: "الزخم والطاقة الحركية",
    description: "الجزء الثاني من شرح الزخم الخطي والطاقة الحركية.",
    url: "https://youtu.be/HFKlTxFMerI",
    tags: ["زخم", "طاقة حركية", "شرح"],
    dateAdded: "2026-08-15",
    source: "YouTube"
  },

  {
    id: "physics-momentum-3",
    title: "الزخم الخطي والطاقة الحركية 3",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "video",
    category: "شرح فيديو",
    unit: "الزخم والطاقة الحركية",
    description: "الجزء الثالث من شرح الزخم الخطي والطاقة الحركية.",
    url: "https://youtu.be/BVyQBSgTIb8",
    tags: ["زخم", "طاقة حركية", "شرح"],
    dateAdded: "2026-08-15",
    source: "YouTube"
  },

  {
    id: "physics-momentum-4",
    title: "الزخم الخطي والطاقة الحركية 4",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "video",
    category: "شرح فيديو",
    unit: "الزخم والطاقة الحركية",
    description: "الجزء الرابع من شرح الزخم الخطي والطاقة الحركية.",
    url: "https://youtu.be/Fjh5LKxREIc",
    tags: ["زخم", "طاقة حركية", "شرح"],
    dateAdded: "2026-08-15",
    source: "YouTube"
  },

  {
    id: "physics-momentum-5",
    title: "الزخم الخطي والطاقة الحركية 5",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "video",
    category: "شرح فيديو",
    unit: "الزخم والطاقة الحركية",
    description: "الجزء الخامس من شرح الزخم الخطي والطاقة الحركية.",
    url: "https://youtu.be/OeTsSD0pICE",
    tags: ["زخم", "طاقة حركية", "شرح"],
    dateAdded: "2026-08-15",
    source: "YouTube"
  },

  {
    id: "physics-momentum-6",
    title: "الزخم الخطي والطاقة الحركية 6",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "video",
    category: "شرح فيديو",
    unit: "الزخم والطاقة الحركية",
    description: "الجزء السادس من شرح الزخم الخطي والطاقة الحركية.",
    url: "https://youtu.be/o7tAZ_50Urw",
    tags: ["زخم", "طاقة حركية", "شرح"],
    dateAdded: "2026-08-15",
    source: "YouTube"
  },

  {
    id: "physics-impulse",
    title: "الدفع لقوة ثابتة",
    subject: "الفيزياء",
    branch: "scientific",
    year: 2026,
    type: "video",
    category: "شرح فيديو",
    unit: "الدفع",
    description: "شرح مفهوم الدفع الناتج عن قوة ثابتة.",
    url: "https://youtu.be/XQ0AjVAkkw8",
    tags: ["الدفع", "قوة ثابتة", "شرح"],
    dateAdded: "2026-08-15",
    source: "YouTube"
  },


  /* =======================================================
     الأحياء
     ======================================================= */

  {
    id: "biology-book",
    title: "كتاب الأحياء",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "كتاب",
    unit: "",
    description: "الكتاب المدرسي لمادة الأحياء للفرع العلمي.",
    url: "https://moe.edu.ps/storage/app/class12/Biology12%202025%20Tawjihi%20Elmi.pdf",
    tags: ["كتاب", "أحياء"],
    dateAdded: "2026-08-15",
    source: "وزارة التربية والتعليم"
  },

  {
    id: "biology-solutions",
    title: "حلول الكتاب",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "حلول",
    unit: "",
    description: "حلول أسئلة وتدريبات كتاب الأحياء.",
    url: "https://drive.google.com/file/d/1GmsJp2MEyoxEkfHwBzB-F1sxca1BT6-W/view?usp=drivesdk",
    tags: ["حلول", "أحياء"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-classification",
    title: "التصنيف",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "تصنيف أسئلة",
    unit: "",
    description: "ملف لتصنيف أسئلة الأحياء حسب موضوعات ودروس المنهج.",
    url: "https://drive.google.com/file/d/1381Vc0mqOLm8AUC8ZMkbe9Poz9FS-9Rg/view?usp=drivesdk",
    tags: ["تصنيف", "أسئلة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-shapes",
    title: "كراسة الأشكال أ. محمد دبابش",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "كراسة / مجلد",
    unit: "",
    description: "مواد تدريبية خاصة بأشكال ورسومات الأحياء.",
    url: "https://drive.google.com/drive/folders/1OvvL4CJwdai8hlEi0qPLnB3EwnYEinH7",
    tags: ["محمد دبابش", "أشكال", "كراسة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-adel",
    title: "ملزمة أ. عادل أبو ليلة",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "ملزمة",
    unit: "",
    description: "ملزمة تعليمية ومراجعة لمادة الأحياء.",
    url: "https://drive.google.com/file/d/1azSHDqmJytBPwgtMpcbCbJUpWj9_dTYt/view?usp=drivesdk",
    tags: ["عادل أبو ليلة", "ملزمة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-pearl-1",
    title: "ملزمة اللؤلؤة — الفصل الأول",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "ملزمة",
    unit: "الفصل الأول",
    description: "ملزمة مراجعة لمحتوى الفصل الدراسي الأول في الأحياء.",
    url: "https://drive.google.com/file/d/13w_CL-TN1-D6qYRXKhI0zWgtAAW_bMo-/view?usp=drivesdk",
    tags: ["اللؤلؤة", "الفصل الأول"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-pearl-2",
    title: "ملزمة اللؤلؤة — الفصل الثاني",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "ملزمة",
    unit: "الفصل الثاني",
    description: "ملزمة مراجعة لمحتوى الفصل الدراسي الثاني في الأحياء.",
    url: "https://drive.google.com/file/d/1TWvmuH5Pk6DsQk5153tviIYJimJA9xSh/view?usp=drivesdk",
    tags: ["اللؤلؤة", "الفصل الثاني"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-esam",
    title: "ملزمة أ. عصام فياض",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "ملزمة / مجلد",
    unit: "",
    description: "مجموعة مواد وملفات مراجعة لمادة الأحياء.",
    url: "https://drive.google.com/drive/folders/1vOZvTJeAx5PfnpboyWJDba6j6Bk3-7Fy",
    tags: ["عصام فياض", "ملزمة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-justify-define",
    title: "علل وعرّف",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "أسئلة ومراجعة",
    unit: "",
    description: "ملف يركز على أسئلة التعليل والتعريفات المهمة في الأحياء.",
    url: "https://link.camscanner.com/aDAkYwCOFc",
    tags: ["علل", "تعريفات", "مراجعة"],
    dateAdded: "2026-08-15",
    source: "CamScanner"
  },

  {
    id: "biology-akram-mcq",
    title: "اختر — أ. أكرم الزيناتي",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "quiz",
    category: "أسئلة اختيار من متعدد",
    unit: "",
    description: "مجموعة أسئلة اختيار من متعدد للتدريب على مادة الأحياء.",
    url: "https://link.camscanner.com/aA4pqxH2lZ",
    tags: ["أكرم الزيناتي", "اختر", "MCQ"],
    dateAdded: "2026-08-15",
    source: "CamScanner"
  },

  {
    id: "biology-ministry-2026",
    title: "وزاري 2026",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "exam",
    category: "امتحان وزاري",
    unit: "",
    description: "امتحان أحياء وزاري لعام 2026.",
    url: "https://drive.google.com/file/d/1K9kuZqrQVo36xVtsjGisRhqcbvK-1Z26/view?usp=drivesdk",
    tags: ["وزاري", "2026"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-experimental",
    title: "امتحانات تجريبية",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "exam",
    category: "امتحانات تجريبية",
    unit: "",
    description: "امتحانات تدريبية تجريبية في مادة الأحياء.",
    url: "https://drive.google.com/file/d/1xvPrG_jbHX6BHHH91nAZKnDdAs_MkzsT/view?usp=drivesdk",
    tags: ["تجريبي", "امتحانات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-new-book",
    title: "الكتاب - نسخة جديدة",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "كتاب",
    unit: "",
    description: "نسخة جديدة من كتاب الأحياء.",
    url: "https://drive.google.com/file/d/1b5QwdbXZV2KH-1p2YUnEk0sDW7e11mid/view?usp=drivesdk",
    tags: ["كتاب", "نسخة جديدة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-new-solutions",
    title: "الحل - نسخة جديدة",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "حلول",
    unit: "",
    description: "نسخة جديدة من حلول كتاب الأحياء.",
    url: "https://drive.google.com/file/d/1ZvYKIvuLa7ePdH_HtQdOzGycpEN3P6zy/view?usp=drivesdk",
    tags: ["حلول", "نسخة جديدة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-asem-folder",
    title: "عاصم فياض (مجلد شامل)",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "مجلد شامل",
    unit: "",
    description: "مجلد شامل يحتوي على مواد ومراجعات للأحياء.",
    url: "https://drive.google.com/drive/folders/11y2v8l0hPaZcJ7Kf2xYVRWrldnGorC68",
    tags: ["عاصم فياض", "مجلد شامل"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-rayyan",
    title: "ملزمة الريان (مجلد)",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "ملزمة / مجلد",
    unit: "",
    description: "مجموعة مواد تعليمية ومراجعات لمادة الأحياء.",
    url: "https://drive.google.com/drive/folders/1R12iyeSqZzllYG2Q2Ynh6cvxq-lrk9ON",
    tags: ["الريان", "ملزمة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-mutafawiq",
    title: "المتفوق أ. أكرم الزيناتي (مجلد)",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "مجلد",
    unit: "",
    description: "مجموعة مواد تدريبية ومراجعات للأحياء.",
    url: "https://drive.google.com/drive/folders/17ckkVtb4HjdjKN9RSd8eC4Wh5NJx_RBk",
    tags: ["المتفوق", "أكرم الزيناتي"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-genetics-guide",
    title: "إرشادات لحل مسائل الوراثة",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "شرح",
    unit: "الوراثة",
    description: "إرشادات وقواعد تساعد الطالب على حل مسائل الوراثة.",
    url: "https://drive.google.com/file/d/1vMfM5Frnhil75S1Dg_-CNMMfRr1mscSp/view?usp=drivesdk",
    tags: ["وراثة", "مسائل", "شرح"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-gene-protein",
    title: "قواعد لحل مسائل من الجين للبروتين",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "شرح وقواعد",
    unit: "الجين والبروتين",
    description: "قواعد وخطوات تساعد في حل مسائل انتقال المعلومات من الجين إلى البروتين.",
    url: "https://drive.google.com/file/d/1y40ncuFDeresbSwKoBpKHL6IzGGq2rff/view?usp=drivesdk",
    tags: ["جين", "بروتين", "قواعد"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-question-bank",
    title: "بنك الأسئلة - أحياء",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "بنك أسئلة",
    unit: "",
    description: "مجموعة كبيرة من أسئلة الأحياء للتدريب والمراجعة.",
    url: "https://drive.google.com/drive/folders/1Z5kt01L9zdAJi_c89n4rSXrVaOYX_EfW",
    tags: ["بنك أسئلة", "أحياء"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-mohammad-haddad",
    title: "تلخيص مفاتيح حل الأحياء أ. محمد الحداد",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "ملخص",
    unit: "",
    description: "ملخص يركز على المفاتيح والطرق المهمة لحل أسئلة الأحياء.",
    url: "https://drive.google.com/file/d/17JjjRgC3I7XV36oFiVKK28QwqnVYgbcM/view?usp=drivesdk",
    tags: ["محمد الحداد", "ملخص"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-definitions",
    title: "تعريفات الكتاب",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "ملخص",
    unit: "",
    description: "مجموعة تعريفات مهمة واردة في كتاب الأحياء.",
    url: "https://drive.google.com/file/d/1b78pioEmfOQ2nasDnlCiHYk4JTJ2fwH_/view?usp=drivesdk",
    tags: ["تعريفات", "كتاب"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-genetics-justify",
    title: "تعليل الوراثة",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "تعليلات",
    unit: "الوراثة",
    description: "مجموعة تعليلات وأسئلة مهمة في موضوع الوراثة.",
    url: "https://drive.google.com/file/d/1TxmGo2HhLoWpBBbV0cZ9-TadMQi8DPFI/view?usp=drivesdk",
    tags: ["وراثة", "تعليلات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-definitions-justifications",
    title: "تعريفات وتعليلات الكتاب (مجلد)",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "تعريفات وتعليلات",
    unit: "",
    description: "مجلد يحتوي على تعريفات وتعليلات مهمة من كتاب الأحياء.",
    url: "https://drive.google.com/drive/folders/15U4EZjrF2tus4a3NB342tmcFhwvCjos9",
    tags: ["تعريفات", "تعليلات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-ministry-2018-2021",
    title: "امتحانات وزارية 2018-2021 (مجلد)",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "امتحانات وزارية",
    unit: "",
    description: "مجموعة امتحانات وزارية سابقة من سنوات 2018 إلى 2021.",
    url: "https://drive.google.com/drive/folders/1BTYNAN4pp-67FslO74fTy6hVrOZ_-BDz",
    tags: ["وزاري", "2018", "2019", "2020", "2021"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-westbank-experimental",
    title: "تجريبي ضفة (مجلد)",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "امتحانات تجريبية",
    unit: "",
    description: "مجموعة امتحانات تجريبية من الضفة الغربية.",
    url: "https://drive.google.com/drive/folders/1NvkYS1U1dHstCaJEF4lZz3rPK3Tj5dk7",
    tags: ["تجريبي", "ضفة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-gaza-experimental",
    title: "تجريبي غزة",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "exam",
    category: "امتحان تجريبي",
    unit: "",
    description: "امتحان تجريبي لمادة الأحياء مخصص للتدريب.",
    url: "https://drive.google.com/file/d/1wuocAxFmN85d9eTldnaB-OWdB-6KDZ_h/view?usp=drivesdk",
    tags: ["تجريبي", "غزة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-question-classification",
    title: "تصنيف الأسئلة",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "تصنيف أسئلة",
    unit: "",
    description: "ملف لتصنيف أسئلة الأحياء حسب الموضوعات.",
    url: "https://drive.google.com/file/d/1xfTR1buer7btdikiGIQo_pQ6uEtkFjyt/view?usp=drivesdk",
    tags: ["تصنيف", "أسئلة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-2022-first-session",
    title: "امتحان أحياء 2022 دورة أولى (مجلد)",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "امتحان وزاري",
    unit: "",
    description: "مواد وملفات امتحان الأحياء للدورة الأولى لعام 2022.",
    url: "https://drive.google.com/drive/folders/1bmGHqFDZ6T8ImVKFW5H3mw0iA2DpZGIw",
    tags: ["2022", "وزاري", "دورة أولى"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-palestine-university-review",
    title: "مراجعة جامعة فلسطين",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "مراجعة",
    unit: "",
    description: "مادة مراجعة تساعد على الاستعداد للامتحان.",
    url: "https://drive.google.com/file/d/1TONe_BlpF1UDn7bwybyeV1nlrjQkgH46/view?usp=drivesdk",
    tags: ["مراجعة", "جامعة فلسطين"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-final-night",
    title: "مراجعة نهائية ليلة الامتحان (مجلد)",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "مراجعة نهائية",
    unit: "",
    description: "مجلد يحتوي على مواد للمراجعة النهائية قبل امتحان الأحياء.",
    url: "https://drive.google.com/drive/folders/1VAr5mP6ymzZYedbjXB3MouieIjQlUGny",
    tags: ["مراجعة نهائية", "ليلة الامتحان"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "biology-ministry-2025",
    title: "تجميع امتحانات وزاري 2025 📌",
    subject: "الأحياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "امتحانات وزارية",
    unit: "",
    description: "تجميعة امتحانات وزارية لعام 2025.",
    url: "https://drive.google.com/drive/folders/1N_TrqQRmao1m1_Bc6SkAnw7XdSIV-sPQ",
    tags: ["وزاري", "2025"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },


  /* =======================================================
     الرياضيات أدبي
     ======================================================= */

  {
    id: "math-literary-book",
    title: "كتاب الرياضيات",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "كتاب",
    unit: "",
    description: "الكتاب المدرسي لمادة الرياضيات للفرع الأدبي.",
    url: "https://drive.google.com/file/d/1QbpjvgGuUkdJVxIMsQodmtAL-Q-bYtzU/view?usp=drivesdk",
    tags: ["كتاب", "رياضيات", "أدبي"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-literary-solutions-1",
    title: "حلول الكتاب — الفصل الأول",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "حلول",
    unit: "الفصل الأول",
    description: "حلول أسئلة كتاب الرياضيات للفصل الأول.",
    url: "https://drive.google.com/file/d/1Z-4Nqq83P0G1jl1hag-6fBbWQ9fDtjfD/view?usp=drivesdk",
    tags: ["حلول", "الفصل الأول"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-literary-solutions-2",
    title: "حلول الكتاب — الفصل الثاني",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "حلول",
    unit: "الفصل الثاني",
    description: "حلول أسئلة كتاب الرياضيات للفصل الثاني.",
    url: "https://drive.google.com/file/d/1mXlPWhR6BpHvL_OjaFyal-igJDDJvO4w/view?usp=drivesdk",
    tags: ["حلول", "الفصل الثاني"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-unit-1",
    title: "الكامل الوحدة الأولى",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "الوحدة الأولى",
    description: "مادة تدريبية شاملة للوحدة الأولى.",
    url: "https://drive.google.com/file/d/1jOKDkjB3uguY5kNie4RmprlMWp9LMoaa/view?usp=drivesdk",
    tags: ["الكامل", "الوحدة الأولى"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-unit-1-solutions",
    title: "حلول الوحدة الأولى",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "حلول",
    unit: "الوحدة الأولى",
    description: "حلول تدريبات وأسئلة الوحدة الأولى.",
    url: "https://drive.google.com/file/d/1RXlRNvzB3WcVXYFwUcT2eP_oxzq8D1ed/view?usp=drivesdk",
    tags: ["حلول", "الوحدة الأولى"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-unit-2",
    title: "الوحدة الثانية",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "الوحدة الثانية",
    description: "مادة مراجعة وتدريب للوحدة الثانية.",
    url: "https://drive.google.com/file/d/1dfgn8IkK77tPwOvC4uuj6wrPMFEf1k_Y/view?usp=drivesdk",
    tags: ["الوحدة الثانية"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-unit-2-solutions",
    title: "حلول الوحدة الثانية",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "حلول",
    unit: "الوحدة الثانية",
    description: "حلول تدريبات وأسئلة الوحدة الثانية.",
    url: "https://drive.google.com/file/d/1-MG7lYMilKrojt-87MiUwj-Oz5UtVhCl/view?usp=drivesdk",
    tags: ["حلول", "الوحدة الثانية"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-unit-3",
    title: "الوحدة الثالثة",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "الوحدة الثالثة",
    description: "مادة مراجعة وتدريب للوحدة الثالثة.",
    url: "https://drive.google.com/file/d/19EgLALpObzwwI_KJnpdre_2a0qTkN73D/view?usp=drivesdk",
    tags: ["الوحدة الثالثة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-unit-3-solutions",
    title: "حلول الوحدة الثالثة",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "حلول",
    unit: "الوحدة الثالثة",
    description: "حلول تدريبات وأسئلة الوحدة الثالثة.",
    url: "https://drive.google.com/file/d/1iG5FA2BKD7zpUWdbUrP7TnkVo2f4TOw8/view?usp=drivesdk",
    tags: ["حلول", "الوحدة الثالثة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-unit-4",
    title: "الوحدة الرابعة",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "الوحدة الرابعة",
    description: "مادة مراجعة وتدريب للوحدة الرابعة.",
    url: "https://drive.google.com/file/d/1LmGynzjdejkZPo8H0RarCaSul70VnjPb/view?usp=drivesdk",
    tags: ["الوحدة الرابعة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-unit-4-solutions",
    title: "حلول الوحدة الرابعة",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "حلول",
    unit: "الوحدة الرابعة",
    description: "حلول تدريبات وأسئلة الوحدة الرابعة.",
    url: "https://drive.google.com/file/d/1Gbor86gPrBB-xZVNBKGXO8eN-aKTJBu9/view?usp=drivesdk",
    tags: ["حلول", "الوحدة الرابعة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-unit-5",
    title: "الوحدة الخامسة",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "الوحدة الخامسة",
    description: "مادة مراجعة وتدريب للوحدة الخامسة.",
    url: "https://drive.google.com/file/d/1VDykPrlou1PHktRHPeONpnqtSIXs0PH7/view?usp=drivesdk",
    tags: ["الوحدة الخامسة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-unit-5-solutions",
    title: "حلول الوحدة الخامسة",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "حلول",
    unit: "الوحدة الخامسة",
    description: "حلول تدريبات وأسئلة الوحدة الخامسة.",
    url: "https://drive.google.com/file/d/1nN_XyEStle4YXD1Ucwf2CxE48_aYlzHa/view?usp=drivesdk",
    tags: ["حلول", "الوحدة الخامسة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-huda",
    title: "تلخيصات أ. هدى فرج",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "folder",
    category: "ملخصات",
    unit: "",
    description: "مجموعة تلخيصات لمادة الرياضيات.",
    url: "https://drive.google.com/drive/folders/1e_vgC4ge-QvqTRdYkfKW8_zXpdZGItl0",
    tags: ["هدى فرج", "تلخيصات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-bilal",
    title: "تلخيصات أ. بلال الكخن",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "folder",
    category: "ملخصات",
    unit: "",
    description: "مجموعة تلخيصات ومراجعات للرياضيات.",
    url: "https://drive.google.com/drive/folders/1kp40DibUJs6sC2r0fkUALoqerKtQS0Sw",
    tags: ["بلال الكخن", "تلخيصات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-creative-1",
    title: "المبدع في الرياضيات — الفصل الأول",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "الفصل الأول",
    description: "مذكرة تدريبية لمادة الرياضيات للفصل الأول.",
    url: "https://drive.google.com/file/d/19-Tk6VhjqaCMqJH7cbM0EdSlUX8kPvG_/view?usp=drivesdk",
    tags: ["المبدع", "الفصل الأول"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-creative-2",
    title: "المبدع في الرياضيات — الفصل الثاني",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "الفصل الثاني",
    description: "مذكرة تدريبية لمادة الرياضيات للفصل الثاني.",
    url: "https://drive.google.com/file/d/14rYh0FllebkiGyFL3IQyUW4zNvTZbVHB/view?usp=drivesdk",
    tags: ["المبدع", "الفصل الثاني"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-alaa",
    title: "تلخيصات أ. علاء عواد",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "folder",
    category: "ملخصات",
    unit: "",
    description: "مجموعة تلخيصات ومراجعات لمادة الرياضيات.",
    url: "https://drive.google.com/drive/folders/1h03_oDZ0OGmb_Tt1THqOILgfLp-e9zQa",
    tags: ["علاء عواد", "تلخيصات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-taher",
    title: "تلخيصات أ. طاهر الرحال",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "folder",
    category: "ملخصات",
    unit: "",
    description: "مواد تلخيص ومراجعة لمادة الرياضيات.",
    url: "https://drive.google.com/drive/folders/1s1u50lGD2rxhvWafyJn-wPD1EV1zdBku",
    tags: ["طاهر الرحال", "تلخيصات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-integral-summary",
    title: "ملخص طرق التكامل — أ. ثابت خاروف",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "ملخص",
    unit: "التكامل",
    description: "ملخص يركز على طرق وقواعد التكامل.",
    url: "https://drive.google.com/file/d/19nYZtZMt0dZzlbcPdJR2BSFqZgGwx_3y/view?usp=drivesdk",
    tags: ["التكامل", "ثابت خاروف"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-ministry-2007-2021",
    title: "اختبارات وزارية 2007–2021 مع الحلول",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "exam",
    category: "امتحانات وزارية",
    unit: "",
    description: "مجموعة اختبارات وزارية من 2007 إلى 2021 مع الحلول.",
    url: "https://drive.google.com/file/d/1JEK4CdgxOhjo65B4WU6HCLJMp9QJdW0K/view?usp=drivesdk",
    tags: ["وزاري", "2007", "2021", "حلول"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-ministry-2019-2022",
    title: "اختبارات وزارية 2019–2022 مع الحلول",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "exam",
    category: "امتحانات وزارية",
    unit: "",
    description: "اختبارات وزارية من 2019 إلى 2022 مرفقة بالحلول.",
    url: "https://drive.google.com/file/d/1wOhRwdJ0pBrgjwF739rJp0jrykX5oIPi/view?usp=drivesdk",
    tags: ["وزاري", "2019", "2022", "حلول"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-ministry-2026-paper1",
    title: "وزاري 2026 — ورقة أولى مع الحل",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "exam",
    category: "امتحان وزاري",
    unit: "الورقة الأولى",
    description: "ورقة امتحان الرياضيات لعام 2026 مع حلولها.",
    url: "https://drive.google.com/drive/folders/1btrjebTx4O8pgSLmPL9vJGumZWYIx0xr",
    tags: ["وزاري", "2026", "ورقة أولى"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-ministry-2026-paper2",
    title: "وزاري 2026 — ورقة ثانية مع الحل",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "exam",
    category: "امتحان وزاري",
    unit: "الورقة الثانية",
    description: "الورقة الثانية من امتحان الرياضيات الوزاري لعام 2026 مع الحل.",
    url: "https://drive.google.com/file/d/1-4zY-RjOOyALh1slue8e9CaP1cXfFC7z/view?usp=drivesdk",
    tags: ["وزاري", "2026", "ورقة ثانية"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-experimental-2026-paper1",
    title: "اختبارات تجريبية 2026 — ورقة أولى",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "exam",
    category: "امتحان تجريبي",
    unit: "الورقة الأولى",
    description: "ورقة أولى من اختبارات الرياضيات التجريبية لعام 2026.",
    url: "https://drive.google.com/file/d/1fBkNXw1GRO4jF5JilH8rvh0KRaAjZATS/view?usp=drivesdk",
    tags: ["تجريبي", "2026", "ورقة أولى"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-experimental-2026-paper2",
    title: "اختبارات تجريبية 2026 — ورقة ثانية",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "exam",
    category: "امتحان تجريبي",
    unit: "الورقة الثانية",
    description: "ورقة ثانية من اختبارات الرياضيات التجريبية لعام 2026.",
    url: "https://drive.google.com/file/d/1zg8aw2IAS0EY1MYUpRVhL-nxhOwRYUo1/view?usp=drivesdk",
    tags: ["تجريبي", "2026", "ورقة ثانية"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-complete-1",
    title: "كراسة الكامل - الوحدة الأولى التفاضل 2026",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "كراسة",
    unit: "التفاضل",
    description: "كراسة تدريبية في الوحدة الأولى الخاصة بالتفاضل لعام 2026.",
    url: "https://drive.google.com/file/d/1f0HO2uq2HhvjMqX7wyl1SuO3SO0bvuRL/view?usp=drivesdk",
    tags: ["الكامل", "تفاضل", "2026"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-complete-2",
    title: "كراسة الكامل - الوحدة الثانية تطبيقات التفاضل",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "كراسة",
    unit: "تطبيقات التفاضل",
    description: "كراسة تدريبية في تطبيقات التفاضل.",
    url: "https://drive.google.com/file/d/1bkuTbcVaetsyfc9VP-ET33cySs6NkPGk/view?usp=drivesdk",
    tags: ["الكامل", "تطبيقات التفاضل"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-complete-3",
    title: "كراسة الكامل - الوحدة الثالثة المصفوفات",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "كراسة",
    unit: "المصفوفات",
    description: "كراسة تدريبية في موضوع المصفوفات.",
    url: "https://drive.google.com/file/d/1FGeeu8FlsBFXdWMD0LZ4uxhvbthgFgf1/view?usp=drivesdk",
    tags: ["الكامل", "المصفوفات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-complete-4",
    title: "كراسة الكامل - الوحدة الرابعة التكامل غير المحدود",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "كراسة",
    unit: "التكامل غير المحدود",
    description: "كراسة تدريبية في التكامل غير المحدود.",
    url: "https://drive.google.com/file/d/1ZVfbCV5ALwyKKsqtRPPcJe30s_EiVula/view?usp=drivesdk",
    tags: ["الكامل", "التكامل غير المحدود"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "math-complete-5",
    title: "كراسة الكامل - الوحدة الخامسة التكامل المحدود",
    subject: "الرياضيات أدبي",
    branch: "literary",
    year: 2026,
    type: "pdf",
    category: "كراسة",
    unit: "التكامل المحدود",
    description: "كراسة تدريبية في التكامل المحدود.",
    url: "https://drive.google.com/file/d/1EjKXmwu2NIoMUEUHH2hRaOfonzwT4zBR/view?usp=drivesdk",
    tags: ["الكامل", "التكامل المحدود"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },


  /* =======================================================
     الكيمياء
     ======================================================= */

  {
    id: "chemistry-book",
    title: "الكتاب",
    subject: "الكيمياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "كتاب",
    unit: "",
    description: "الكتاب المدرسي لمادة الكيمياء.",
    url: "https://drive.google.com/file/d/1E3v3NRsiguxNP_9X7I0h8WtftqdjgSE-/view?usp=drivesdk",
    tags: ["كتاب", "كيمياء"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "chemistry-solutions",
    title: "حلول كتاب الكيمياء",
    subject: "الكيمياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "حلول",
    unit: "",
    description: "حلول أسئلة وتدريبات كتاب الكيمياء.",
    url: "https://drive.google.com/file/d/1dde3chiwEt40fW2nM41BS2tMcCQPN8vm/view?usp=drivesdk",
    tags: ["حلول", "كيمياء"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "chemistry-classification-1",
    title: "التصنيف للفصل الأول مع حلوله",
    subject: "الكيمياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "تصنيف أسئلة",
    unit: "الفصل الأول",
    description: "تصنيف أسئلة الفصل الأول في الكيمياء مع الحلول.",
    url: "https://drive.google.com/file/d/1ElYpRhDTNYOHyCrn6Ap1K5NVaZSuIOOY/view?usp=drivesdk",
    tags: ["تصنيف", "الفصل الأول", "حلول"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "chemistry-classification-2",
    title: "التصنيف للفصل الثاني مع حلوله",
    subject: "الكيمياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "تصنيف أسئلة",
    unit: "الفصل الثاني",
    description: "تصنيف أسئلة الفصل الثاني في الكيمياء مع الحلول.",
    url: "https://drive.google.com/file/d/1rk1tof4saoEeS5xosYnOjFVuKN8x0t_a/view?usp=drivesdk",
    tags: ["تصنيف", "الفصل الثاني", "حلول"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "chemistry-experimental-2026",
    title: "تجميعة تجريبي 2026",
    subject: "الكيمياء",
    branch: "scientific",
    year: 2026,
    type: "exam",
    category: "امتحانات تجريبية",
    unit: "",
    description: "تجميعة امتحانات تجريبية في الكيمياء لعام 2026.",
    url: "https://drive.google.com/file/d/10CmDolqKsL8yz7UPDtELj8w7_mivzJwO/view?usp=drivesdk",
    tags: ["تجريبي", "2026"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "chemistry-ministry-2026",
    title: "وزاري 2026",
    subject: "الكيمياء",
    branch: "scientific",
    year: 2026,
    type: "exam",
    category: "امتحان وزاري",
    unit: "",
    description: "امتحان الكيمياء الوزاري لعام 2026.",
    url: "https://drive.google.com/file/d/1ixY0KnLMFemq7PNc__aN0M_aLM-smgUO/view?usp=drivesdk",
    tags: ["وزاري", "2026"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "chemistry-foundation",
    title: "دوسية تأسيس",
    subject: "الكيمياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "دوسية تأسيس",
    unit: "التأسيس",
    description: "دوسية تساعد الطالب على تأسيس أساسيات الكيمياء.",
    url: "https://drive.google.com/file/d/1dtEKCLvY6suVrq0XZo--j1iNwmmj3CNb/view?usp=drivesdk",
    tags: ["تأسيس", "كيمياء"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "chemistry-omar-definitions",
    title: "ملخص تعريفات وتعليلات — أ. عمر جيتاوي",
    subject: "الكيمياء",
    branch: "scientific",
    year: 2026,
    type: "pdf",
    category: "ملخص",
    unit: "",
    description: "ملخص للتعريفات والتعليلات المهمة في الكيمياء.",
    url: "https://drive.google.com/file/d/1bjzrWpzWLHnFBSqhRd_vHlVFzVK3rUGx/view?usp=drivesdk",
    tags: ["عمر جيتاوي", "تعريفات", "تعليلات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "chemistry-emad-folder",
    title: "دوسية الأستاذ عماد السر",
    subject: "الكيمياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "دوسية / مجلد",
    unit: "",
    description: "مجموعة مواد ودوسيات تعليمية لمادة الكيمياء.",
    url: "https://drive.google.com/drive/folders/1d5Fg4sq3oQP6ffSiq5y0L6HGrta_8IeA",
    tags: ["عماد السر", "دوسية"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "chemistry-asem-folder",
    title: "دوسية الأستاذ عاصم فياض",
    subject: "الكيمياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "دوسية / مجلد",
    unit: "",
    description: "مجموعة مواد ومراجعات لمادة الكيمياء.",
    url: "https://drive.google.com/drive/folders/1cpTwqgY7kEtArBccSOjNxr5R3zDWLLz_",
    tags: ["عاصم فياض", "دوسية"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "chemistry-wissam",
    title: "الأستاذ وسام دبابش",
    subject: "الكيمياء",
    branch: "scientific",
    year: 2026,
    type: "folder",
    category: "شرح / مجلد",
    unit: "",
    description: "مجلد يحتوي على مواد تعليمية وشروحات لمادة الكيمياء.",
    url: "https://drive.google.com/drive/folders/10-Ml-fqW-O04tvQk-M1WsrRLB2H9S253",
    tags: ["وسام دبابش", "شرح"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },


  /* =======================================================
     اللغة الإنجليزية
     ======================================================= */

  {
    id: "english-book",
    title: "كتاب الإنجليزي",
    subject: "اللغة الإنجليزية",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "كتاب",
    unit: "",
    description: "الكتاب المدرسي لمادة اللغة الإنجليزية.",
    url: "https://drive.google.com/file/d/1RYYStUJ2uUJDEZ9pFCo922SkHf3d0Xgl/view?usp=drivesdk",
    tags: ["كتاب", "إنجليزي"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "english-solutions",
    title: "حلول الكتاب",
    subject: "اللغة الإنجليزية",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "حلول",
    unit: "",
    description: "حلول تدريبات وأسئلة كتاب اللغة الإنجليزية.",
    url: "https://drive.google.com/file/d/1kln9vi-8sRdSI3kpK1vs_fLzANHqnB7I/view?usp=drivesdk",
    tags: ["حلول", "إنجليزي"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "english-classification",
    title: "التصنيف",
    subject: "اللغة الإنجليزية",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "تصنيف أسئلة",
    unit: "",
    description: "ملف لتصنيف أسئلة اللغة الإنجليزية حسب الموضوعات.",
    url: "https://drive.google.com/file/d/1C81xKMZe3Cj6AcdjoQ19Iblncbh5uQAX/view?usp=drivesd",
    tags: ["تصنيف", "إنجليزي"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "english-ms-sema",
    title: "دوسيات المس سيما",
    subject: "اللغة الإنجليزية",
    branch: "all",
    year: 2026,
    type: "folder",
    category: "دوسيات / مجلد",
    unit: "",
    description: "مجموعة دوسيات ومراجعات لمادة اللغة الإنجليزية.",
    url: "https://drive.google.com/drive/folders/19qX7SMwJHq4igCnMXbsChaiyDSLrm5st",
    tags: ["المس سيما", "دوسيات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "english-past-reading",
    title: "قطع سنوات سابقة",
    subject: "اللغة الإنجليزية",
    branch: "all",
    year: 2026,
    type: "folder",
    category: "أسئلة وقطع",
    unit: "",
    description: "مجموعة قطع قراءة من سنوات سابقة للتدرب على أسئلة اللغة الإنجليزية.",
    url: "https://drive.google.com/drive/folders/1f7pFWUijFmj1h3mZf-bOXR3vcvdhSjdd",
    tags: ["قطع", "سنوات سابقة", "قراءة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "english-grammar-past",
    title: "أسئلة قواعد سنوات سابقة",
    subject: "اللغة الإنجليزية",
    branch: "all",
    year: 2026,
    type: "folder",
    category: "أسئلة قواعد",
    unit: "",
    description: "مجموعة أسئلة قواعد من سنوات سابقة للتدريب.",
    url: "https://drive.google.com/drive/folders/1fIpIuYwk284fMfupfpCPMnAEoLl-qMli",
    tags: ["قواعد", "سنوات سابقة"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "english-solution",
    title: "السيليوشن",
    subject: "اللغة الإنجليزية",
    branch: "all",
    year: 2026,
    type: "folder",
    category: "حلول",
    unit: "",
    description: "مجموعة ملفات وحلول مرتبطة بمادة اللغة الإنجليزية.",
    url: "https://drive.google.com/drive/folders/1nHMuTG3aZYGct6M8Eyebi5J0tkVzWra",
    tags: ["سيليوشن", "حلول"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "english-ministry",
    title: "امتحانات وزارية",
    subject: "اللغة الإنجليزية",
    branch: "all",
    year: 2026,
    type: "folder",
    category: "امتحانات وزارية",
    unit: "",
    description: "مجموعة امتحانات وزارية سابقة في اللغة الإنجليزية.",
    url: "https://drive.google.com/drive/folders/1pqkpMQu7DiSTQt3YCUJ8lC9knJHQ0iKp",
    tags: ["وزاري", "إنجليزي"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "english-experimental",
    title: "امتحانات تجريبية",
    subject: "اللغة الإنجليزية",
    branch: "all",
    year: 2026,
    type: "exam",
    category: "امتحان تجريبي",
    unit: "",
    description: "امتحان تجريبي للتدرب على أسئلة اللغة الإنجليزية.",
    url: "https://drive.google.com/file/d/179zH2V1ABKtf8ghtDHPgPpPS33p1SOqo/view?usp=drivesdk",
    tags: ["تجريبي", "إنجليزي"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },


  /* =======================================================
     التكنولوجيا
     ======================================================= */

  {
    id: "technology-book",
    title: "كتاب التكنولوجيا",
    subject: "التكنولوجيا",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "كتاب",
    unit: "",
    description: "الكتاب المدرسي لمادة التكنولوجيا.",
    url: "https://drive.google.com/file/d/1ZLGnqXEUwKEU9eEfuRaGxbN7n1NMen3Z/view?usp=drivesd",
    tags: ["كتاب", "تكنولوجيا"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "technology-solutions",
    title: "حلول الكتاب",
    subject: "التكنولوجيا",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "حلول",
    unit: "",
    description: "حلول أسئلة وتدريبات كتاب التكنولوجيا.",
    url: "https://drive.google.com/file/d/1q2NBM6B-o1XE8GxUK9E5ECap-_jjGOww/view?usp=drivesdk",
    tags: ["حلول", "تكنولوجيا"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "technology-classification",
    title: "التصنيف وحلول",
    subject: "التكنولوجيا",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "تصنيف أسئلة",
    unit: "",
    description: "تصنيف أسئلة مادة التكنولوجيا مع حلولها.",
    url: "https://drive.google.com/file/d/1C70LkUL7ilxOXbqtcMexC_4pQrmGP65Z/view?usp=drivesdk",
    tags: ["تصنيف", "حلول"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "technology-excellent-folder",
    title: "دوسية المتميز مع حلولها",
    subject: "التكنولوجيا",
    branch: "all",
    year: 2026,
    type: "folder",
    category: "دوسية / مجلد",
    unit: "",
    description: "دوسية تعليمية لمادة التكنولوجيا مرفقة بالحلول.",
    url: "https://drive.google.com/drive/folders/1OIZoRYwV2eBKGPzT9X_mL1MlyMxRWLsD",
    tags: ["المتميز", "دوسية", "حلول"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "technology-hazem",
    title: "دوسية حازم قرعاوي",
    subject: "التكنولوجيا",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "",
    description: "مذكرة مراجعة وتدريب لمادة التكنولوجيا.",
    url: "https://drive.google.com/file/d/1WFHIo8rcmjeiZ-XGD6McJ5SuXwNg4009/view?usp=drivesdk",
    tags: ["حازم قرعاوي", "دوسية"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "technology-professional",
    title: "دوسية المحترف",
    subject: "التكنولوجيا",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "",
    description: "مذكرة تعليمية ومراجعة لمادة التكنولوجيا.",
    url: "https://drive.google.com/file/d/1V56RFnDcpNlLPI8F9QfEC93v5E41ziju/view?usp=drivesdk",
    tags: ["المحترف", "دوسية"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "technology-complete",
    title: "دوسية الكامل",
    subject: "التكنولوجيا",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "",
    description: "مذكرة شاملة للمراجعة والتدريب في التكنولوجيا.",
    url: "https://drive.google.com/file/d/1V2--e3nAdsIcYMPP9NKy0-tBlqAVE8fS/view?usp=drivesdk",
    tags: ["الكامل", "دوسية"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "technology-creativity",
    title: "دوسية الإبداع",
    subject: "التكنولوجيا",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "دوسية",
    unit: "",
    description: "مذكرة تعليمية ومراجعة لمادة التكنولوجيا.",
    url: "https://drive.google.com/file/d/1Ud0wxihmRl0P5y1NVTr2RILeDCdC2vxR/view?usp=drivesdk",
    tags: ["الإبداع", "دوسية"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "technology-question-bank",
    title: "بنك الامتحان",
    subject: "التكنولوجيا",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "بنك أسئلة",
    unit: "",
    description: "مجموعة أسئلة وتدريبات للتحضير لامتحان التكنولوجيا.",
    url: "https://drive.google.com/file/d/1U3Lb7Z-47EW1eKhEcypnUBrdxcXElJFA/view?usp=drivesdk",
    tags: ["بنك أسئلة", "امتحان"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "technology-summary",
    title: "ملخص شامل",
    subject: "التكنولوجيا",
    branch: "all",
    year: 2026,
    type: "pdf",
    category: "ملخص",
    unit: "",
    description: "ملخص شامل لمادة التكنولوجيا.",
    url: "https://drive.google.com/file/d/1VE7e1md-Jr_RJkIN3UbeX6qcmFDTwjki/view?usp=drivesdk",
    tags: ["ملخص شامل", "تكنولوجيا"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "technology-experimental",
    title: "الامتحانات التجريبية",
    subject: "التكنولوجيا",
    branch: "all",
    year: 2026,
    type: "folder",
    category: "امتحانات تجريبية",
    unit: "",
    description: "مجموعة امتحانات تجريبية للتدرب على المادة.",
    url: "https://drive.google.com/drive/folders/1LWWxiJMZnPd3KcnkvVjrZ8YMTjYHyytU",
    tags: ["تجريبي", "امتحانات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
  },

  {
    id: "technology-ministry",
    title: "الامتحانات الوزارية",
    subject: "التكنولوجيا",
    branch: "all",
    year: 2026,
    type: "folder",
    category: "امتحانات وزارية",
    unit: "",
    description: "مجموعة امتحانات وزارية سابقة لمادة التكنولوجيا.",
    url: "https://drive.google.com/drive/folders/1LXHk5_rBfXsoKGzLja53gDDjHnwZwlZb",
    tags: ["وزاري", "امتحانات"],
    dateAdded: "2026-08-15",
    source: "Google Drive"
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

    let res = await fetch(
      'data/content.json',
      {
        cache: 'no-store'
      }
    );

    if (!res.ok) {

      res = await fetch(
        '/Study-With-Me-/data/content.json',
        {
          cache: 'no-store'
        }
      );

    }

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();

    /*
      دمج الروابط الإضافية مع المحتوى الحالي
      بدون حذف البيانات القديمة.
    */

    const existingIds = new Set(
      Array.isArray(data.resources)
        ? data.resources.map(r => r.id)
        : []
    );

    const newResources = SWM.extraResources.filter(
      r => !existingIds.has(r.id)
    );

    data.resources = [
      ...newResources,
      ...(Array.isArray(data.resources)
        ? data.resources
        : [])
    ];

    SWM.state.data = data;

    console.log(
      `✓ تم تحميل المحتوى بنجاح - ${data.resources.length} مصدر`
    );

    return data;

  } catch (err) {

    console.error(
      'Failed to load content.json:',
      err
    );

    const box = document.querySelector(
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
    'online-exam': 'اختبار إلكتروني',
    video: 'فيديو'
  }[type] || type);

};


/* =========================================================
   المفضلة
   ========================================================= */

SWM.getFavorites = function (
  key = 'swm-favorites'
) {

  try {

    const value =
      JSON.parse(
        localStorage.getItem(key) || '[]'
      );

    return Array.isArray(value)
      ? value
      : [];

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


SWM.isFavorite = function (
  id,
  key = 'swm-favorites'
) {

  return SWM.getFavorites(key)
    .includes(id);

};