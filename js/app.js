window.SWM = window.SWM || {};

(function () {

  const currentPage =
    location.pathname.split('/').pop() || 'index.html';

  const navItems = [
    {
      href: 'index.html',
      text: 'الرئيسية',
      icon: '⌂'
    },
    {
      href: 'subjects.html',
      text: 'المواد',
      icon: '📚'
    },
    {
      href: 'library.html',
      text: 'المكتبة',
      icon: '📂'
    },
    {
      href: 'exams.html',
      text: 'الاختبارات',
      icon: '📝'
    },
    {
      href: 'tools.html',
      text: 'أدوات الطالب',
      icon: '🛠️'
    },
    {
      href: 'teams.html',
      text: 'Microsoft Teams',
      icon: '💻'
    },
    {
      href: 'dashboard.html',
      text: 'لوحتي',
      icon: '📊'
    },
    {
      href: 'about.html',
      text: 'حول',
      icon: 'ℹ️'
    }
  ];

  const mobileNavItems = [
    {
      href: 'index.html',
      text: 'الرئيسية',
      icon: '⌂'
    },
    {
      href: 'library.html',
      text: 'المكتبة',
      icon: '📂'
    },
    {
      href: 'exams.html',
      text: 'الاختبارات',
      icon: '📝'
    },
    {
      href: 'tools.html',
      text: 'الأدوات',
      icon: '🛠️'
    },
    {
      href: 'teams.html',
      text: 'Teams',
      icon: '💻'
    },
    {
      href: 'dashboard.html',
      text: 'لوحتي',
      icon: '📊'
    }
  ];

  function isCurrentPage(href) {

    return (
      currentPage === href ||
      (
        currentPage === '' &&
        href === 'index.html'
      )
    );
  }

  /* =========================================================
     NAVBAR
     ========================================================= */

  function renderNavbar() {

    const navContainer =
      document.querySelector('[data-navbar]');

    if (!navContainer) return;

    const navLinksHTML = navItems
      .map(item => {

        const activeClass =
          isCurrentPage(item.href)
            ? 'active'
            : '';

        return `
          <a
            href="${item.href}"
            class="nav-item ${activeClass}"
            title="${item.text}"
          >
            <span>${item.icon}</span>
            <span>${item.text}</span>
          </a>
        `;

      })
      .join('');

    navContainer.innerHTML = `

      <nav class="navbar">

        <div class="nav-inner">

          <a
            href="index.html"
            class="brand"
          >

            <span class="brand-mark">
              ✦
            </span>

            <span>

              <strong>
                ادرس معي
              </strong>

              <small>
                Study With Me
              </small>

            </span>

          </a>

          <div class="nav-links">
            ${navLinksHTML}
          </div>

          <button
            type="button"
            data-menu
            class="mobile-menu-btn"
            aria-label="فتح القائمة"
            aria-expanded="false"
          >
            ☰
          </button>

        </div>

        <div
          data-mobile-menu
          class="mobile-menu"
        ></div>

      </nav>

    `;
  }

  /* =========================================================
     MOBILE MENU
     ========================================================= */

  function renderMobileMenu() {

    const mobileMenu =
      document.querySelector(
        '[data-mobile-menu]'
      );

    if (!mobileMenu) return;

    const html = mobileNavItems
      .map(item => {

        const activeClass =
          isCurrentPage(item.href)
            ? 'active'
            : '';

        return `
          <a
            href="${item.href}"
            class="nav-item ${activeClass}"
          >
            <span>${item.icon}</span>
            <span>${item.text}</span>
          </a>
        `;

      })
      .join('');

    mobileMenu.innerHTML = html;
  }

  /* =========================================================
     BOTTOM NAV
     ========================================================= */

  function renderBottomNav() {

    const bottomNav =
      document.querySelector(
        '[data-bottom-nav]'
      );

    if (!bottomNav) return;

    const html = mobileNavItems
      .map(item => {

        const activeClass =
          isCurrentPage(item.href)
            ? 'active'
            : '';

        return `
          <a
            href="${item.href}"
            class="${activeClass}"
          >
            <span>${item.icon}</span>
            <span>${item.text}</span>
          </a>
        `;

      })
      .join('');

    bottomNav.innerHTML = `

      <nav class="bottom-nav">
        ${html}
      </nav>

    `;
  }

  /* =========================================================
     FOOTER
     ========================================================= */

  function renderFooter() {

    const footer =
      document.querySelector(
        '[data-footer]'
      );

    if (!footer) return;

    footer.innerHTML = `

      <div class="footer">

        <div>
          <strong>
            ادرس معي - ابو ابراهيم - كرم
          </strong>
        </div>

        <p>
          منصة تجميع وترتيب لمصادر طلاب الثانوية
          العامة والتوجيهي.
        </p>

        <p>
          هذا الموقع تجميعي من مصادر وروابط خارجية،
          وليس تلخيصًا أو اجتهادًا شخصيًا من كرم.
        </p>

        <p>
          الملفات والملازم والشروحات تعود إلى أصحابها
          ومصادرها الأصلية.
        </p>

        <p>
          © 2026 ادرس معي
        </p>

      </div>

    `;
  }

  /* =========================================================
     MOBILE MENU TOGGLE
     ========================================================= */

  function setupMenuToggle() {

    const menuBtn =
      document.querySelector(
        '[data-menu]'
      );

    const mobileMenu =
      document.querySelector(
        '[data-mobile-menu]'
      );

    if (!menuBtn || !mobileMenu) {
      return;
    }

    menuBtn.addEventListener(
      'click',
      () => {

        const isOpen =
          mobileMenu.classList.toggle(
            'open'
          );

        menuBtn.setAttribute(
          'aria-expanded',
          String(isOpen)
        );

        menuBtn.textContent =
          isOpen ? '✕' : '☰';

      }
    );

    mobileMenu
      .querySelectorAll('a')
      .forEach(link => {

        link.addEventListener(
          'click',
          () => {

            mobileMenu.classList.remove(
              'open'
            );

            menuBtn.setAttribute(
              'aria-expanded',
              'false'
            );

            menuBtn.textContent = '☰';

          }
        );

      });
  }

  /* =========================================================
     THEME
     ========================================================= */

  function setupTheme() {

    const button =
      document.querySelector(
        '[data-theme-toggle]'
      );

    if (!button) return;

    const saved =
      localStorage.getItem(
        'swm-theme'
      );

    if (saved === 'light') {

      document.body.classList.add(
        'light'
      );

      button.textContent = '🌙';
    }

    button.addEventListener(
      'click',
      () => {

        document.body.classList.toggle(
          'light'
        );

        const light =
          document.body.classList.contains(
            'light'
          );

        localStorage.setItem(
          'swm-theme',
          light
            ? 'light'
            : 'dark'
        );

        button.textContent =
          light
            ? '🌙'
            : '☀️';

      }
    );
  }

  /* =========================================================
     SCROLL REVEAL
     ========================================================= */

  function setupRevealAnimations() {

    const elements =
      document.querySelectorAll(
        `
        .section,
        .card,
        .stat,
        .tool-card,
        .calculator-card,
        .resource-card,
        .section-head
        `
      );

    if (!elements.length) {
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
    ) {

      elements.forEach(element => {
        element.classList.add(
          'visible'
        );
      });

      return;
    }

    const observer =
      new IntersectionObserver(
        (entries, obs) => {

          entries.forEach(entry => {

            if (
              !entry.isIntersecting
            ) {
              return;
            }

            entry.target.classList.add(
              'visible'
            );

            obs.unobserve(
              entry.target
            );

          });

        },
        {
          threshold: 0.12,

          rootMargin:
            '0px 0px -50px 0px'
        }
      );

    elements.forEach(
      element => {

        element.classList.add(
          'reveal'
        );

        observer.observe(
          element
        );

      }
    );
  }

  /* =========================================================
     REFRESH REVEAL
     للبطاقات التي يتم توليدها ديناميكيًا
     ========================================================= */

  function refreshRevealAnimations() {

    const elements =
      document.querySelectorAll(
        `
        .section,
        .card,
        .stat,
        .tool-card,
        .calculator-card,
        .resource-card,
        .section-head
        `
      );

    if (!elements.length) {
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
    ) {

      elements.forEach(
        element => {
          element.classList.add(
            'reveal',
            'visible'
          );
        }
      );

      return;
    }

    const observer =
      new IntersectionObserver(
        (entries, obs) => {

          entries.forEach(entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                'visible'
              );

              obs.unobserve(
                entry.target
              );
            }

          });

        },
        {
          threshold: 0.12,

          rootMargin:
            '0px 0px -50px 0px'
        }
      );

    elements.forEach(
      element => {

        if (
          element.classList.contains(
            'visible'
          )
        ) {
          return;
        }

        element.classList.add(
          'reveal'
        );

        observer.observe(
          element
        );

      }
    );
  }

  /* نجعلها متاحة للملفات الأخرى */
  window.SWM.refreshRevealAnimations =
    refreshRevealAnimations;

  /* =========================================================
     INIT
     ========================================================= */

  function init() {

    try {

      renderNavbar();

      renderMobileMenu();

      renderBottomNav();

      renderFooter();

      setupMenuToggle();

      setupTheme();

      setupRevealAnimations();

      console.log(
        '✓ Study With Me initialized'
      );

    } catch (error) {

      console.error(
        'خطأ في تهيئة الموقع:',
        error
      );

    }
  }

  /* =========================================================
     DOM READY
     ========================================================= */

  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      init
    );

  } else {

    init();

  }

})();
