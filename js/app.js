window.SWM = window.SWM || {};

(function() {
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  
  const navItems = [
    { href: 'index.html', text: 'الرئيسية', icon: '⌂' },
    { href: 'subjects.html', text: 'المواد', icon: '📚' },
    { href: 'library.html', text: 'المكتبة', icon: '📂' },
    { href: 'exams.html', text: 'الاختبارات', icon: '📝' },
    { href: 'tools.html', text: 'أدوات', icon: '🛠️' },
    { href: 'dashboard.html', text: 'لوحتي', icon: '📊' },
    { href: 'about.html', text: 'حول', icon: 'ℹ️' }
  ];

  const mobileNavItems = [
    { href: 'index.html', text: 'الرئيسية', icon: '⌂' },
    { href: 'library.html', text: 'المكتبة', icon: '📂' },
    { href: 'exams.html', text: 'الاختبارات', icon: '📝' },
    { href: 'tools.html', text: 'أدوات', icon: '🛠️' },
    { href: 'dashboard.html', text: 'لوحتي', icon: '📊' }
  ];

  function isCurrentPage(href) {
    return currentPage === href || (currentPage === '' && href === 'index.html');
  }

  function renderNavbar() {
    const navContainer = document.querySelector('[data-navbar]');
    if (!navContainer) return;

    const navLinksHTML = navItems
      .map(item => {
        const activeClass = isCurrentPage(item.href) ? 'active' : '';
        return `<a href="${item.href}" class="nav-item ${activeClass}" title="${item.text}">${item.icon} ${item.text}</a>`;
      })
      .join('');

    navContainer.innerHTML = `
      <nav class="navbar">
        <div class="nav-inner">
          <a href="index.html" class="brand">
            <span class="brand-mark">✦</span>
            <span>
              <strong>ادرس معي</strong>
              <small>Study With Me</small>
            </span>
          </a>
          <div style="display: flex; gap: 20px; align-items: center;">
            <div class="nav-links">
              ${navLinksHTML}
            </div>
            <button data-theme-toggle style="background: none; border: none; font-size: 20px; cursor: pointer; color: var(--text);">☀️</button>
          </div>
          <button data-menu class="mobile-menu-btn">☰</button>
        </div>
        <div data-mobile-menu class="mobile-menu"></div>
      </nav>
    `;
  }

  function renderMobileMenu() {
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    if (!mobileMenu) return;

    const mobileNavLinksHTML = mobileNavItems
      .map(item => {
        const activeClass = isCurrentPage(item.href) ? 'active' : '';
        return `<a href="${item.href}" class="nav-item ${activeClass}">${item.icon} ${item.text}</a>`;
      })
      .join('');

    mobileMenu.innerHTML = mobileNavLinksHTML;
  }

  function renderBottomNav() {
    const bottomNav = document.querySelector('[data-bottom-nav]');
    if (!bottomNav) return;

    const bottomNavHTML = mobileNavItems
      .map(item => {
        const activeClass = isCurrentPage(item.href) ? 'active' : '';
        return `<a href="${item.href}" class="${activeClass}"><span>${item.icon}</span><span>${item.text}</span></a>`;
      })
      .join('');

    bottomNav.innerHTML = `<nav class="bottom-nav">${bottomNavHTML}</nav>`;
  }

  function renderFooter() {
    const footer = document.querySelector('[data-footer]');
    if (!footer) return;

    footer.innerHTML = `
      <div class="footer">
        <div><strong>ادرس معي</strong><span>Study With Me</span></div>
        <p>منصة تعليمية مجانية لطلاب التوجيهي © 2026</p>
      </div>
    `;
  }

  function setupMenuToggle() {
    const menuBtn = document.querySelector('[data-menu]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
      });

      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
        });
      });
    }
  }

  function init() {
    try {
      renderNavbar();
      renderMobileMenu();
      renderBottomNav();
      renderFooter();
      setupMenuToggle();
      console.log('✓ تم تهيئة التطبيق بنجاح');
    } catch (error) {
      console.error('خطأ في التهيئة:', error);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();