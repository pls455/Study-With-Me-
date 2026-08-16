(async () => {

  const d = await SWM.loadData();

  if (!d) return;

  SWM.bindFavorites();

  /* =========================================================
     RESOURCE CARD
     ========================================================= */

  const card = r => `

    <article class="card resource-card">

      <img
        class="card-image"
        src="assets/images/card-image.jpg"
        alt=""
        loading="lazy"
        onerror="this.style.display='none'"
      >

      <div class="resource-top">

        <div class="resource-icon">
          ${SWM.resourceIcon(r.type)}
        </div>

        ${SWM.favoriteButton(r.id)}

      </div>

      <div>

        <h3>
          ${SWM.esc(r.title)}
        </h3>

        <div class="meta">

          <span class="chip">
            ${SWM.esc(r.subject)}
          </span>

          <span class="chip">
            ${SWM.esc(
              SWM.branchName(
                d,
                r.branch
              )
            )}
          </span>

          ${
            r.year
              ? `
                <span class="chip">
                  ${r.year}
                </span>
              `
              : ''
          }

          <span class="chip">
            ${SWM.esc(r.category)}
          </span>

          <span class="chip">
            ${SWM.esc(
              SWM.typeName(r.type)
            )}
          </span>

        </div>

      </div>

      <p>
        ${SWM.esc(
          r.description ||
          'مصدر خارجي.'
        )}
      </p>

      <div class="resource-actions">

        <a
          class="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          href="${SWM.esc(r.url)}"
        >

          ${SWM.resourceIcon(r.type)}

          فتح المصدر

        </a>

      </div>

    </article>

  `;

  /* =========================================================
     FILTERS
     ========================================================= */

  const filters =
    document.querySelector(
      '#library-filters'
    );

  if (filters) {

    const years = [
      ...new Set(
        d.resources
          .map(r => r.year)
          .filter(Boolean)
      )
    ]
      .sort(
        (a, b) => b - a
      );

    filters.innerHTML = `

      <div class="field">

        <label>
          الفرع
        </label>

        <select id="f-branch">

          <option value="">
            كل الفروع
          </option>

          ${
            d.branches
              .map(
                x => `
                  <option
                    value="${x.id}"
                  >
                    ${SWM.esc(x.name)}
                  </option>
                `
              )
              .join('')
          }

        </select>

      </div>

      <div class="field">

        <label>
          المادة
        </label>

        <select id="f-subject">

          <option value="">
            كل المواد
          </option>

          ${
            d.subjects
              .map(
                x => `
                  <option>
                    ${SWM.esc(x.name)}
                  </option>
                `
              )
              .join('')
          }

        </select>

      </div>

      <div class="field">

        <label>
          السنة
        </label>

        <select id="f-year">

          <option value="">
            كل السنوات
          </option>

          ${
            years
              .map(
                y => `
                  <option>
                    ${y}
                  </option>
                `
              )
              .join('')
          }

        </select>

      </div>

      <div class="field">

        <label>
          النوع
        </label>

        <select id="f-type">

          <option value="">
            كل الأنواع
          </option>

          ${
            [
              ...new Set(
                d.resources.map(
                  r => r.type
                )
              )
            ]
              .map(
                t => `
                  <option
                    value="${t}"
                  >
                    ${SWM.typeName(t)}
                  </option>
                `
              )
              .join('')
          }

        </select>

      </div>

      <div class="field">

        <label>
          التصنيف
        </label>

        <select id="f-category">

          <option value="">
            كل التصنيفات
          </option>

          ${
            [
              ...new Set(
                d.resources
                  .map(
                    r => r.category
                  )
                  .filter(Boolean)
              )
            ]
              .map(
                x => `
                  <option>
                    ${SWM.esc(x)}
                  </option>
                `
              )
              .join('')
          }

        </select>

      </div>

    `;
  }

  /* =========================================================
     FILTER FUNCTION
     ========================================================= */

  function filtered() {

    const b =
      document.querySelector(
        '#f-branch'
      )?.value || '';

    const s =
      document.querySelector(
        '#f-subject'
      )?.value || '';

    const y =
      document.querySelector(
        '#f-year'
      )?.value || '';

    const t =
      document.querySelector(
        '#f-type'
      )?.value || '';

    const c =
      document.querySelector(
        '#f-category'
      )?.value || '';

    return d.resources.filter(
      r =>
        (
          !b ||
          r.branch === 'all' ||
          r.branch === b
        ) &&

        (
          !s ||
          r.subject === s
        ) &&

        (
          !y ||
          String(r.year) === y
        ) &&

        (
          !t ||
          r.type === t
        ) &&

        (
          !c ||
          r.category === c
        )
    );
  }

  /* =========================================================
     LIBRARY RENDER
     ========================================================= */

  let shown = 12;

  function renderLib() {

    const arr =
      filtered();

    const grid =
      document.querySelector(
        '#resource-grid'
      );

    if (!grid) return;

    const count =
      document.querySelector(
        '#library-count'
      );

    if (count) {
      count.textContent =
        `${arr.length} مصدر`;
    }

    grid.innerHTML =
      arr
        .slice(0, shown)
        .map(card)
        .join('') ||

      `
        <div
          class="empty"
          style="grid-column:1/-1"
        >
          لا توجد نتائج مطابقة.
        </div>
      `;

    const wrapper =
      document.querySelector(
        '#load-more-wrap'
      );

    if (wrapper) {

      wrapper.innerHTML =
        shown < arr.length

          ? `
              <button
                class="btn btn-primary"
                id="load-more"
              >
                عرض المزيد
              </button>
            `

          : '';
    }

    document
      .querySelector(
        '#load-more'
      )
      ?.addEventListener(
        'click',
        () => {

          shown += 12;

          renderLib();

        }
      );

    /* إعادة تشغيل الأنيميشن */
    requestAnimationFrame(
      () => {

        if (
          typeof SWM.refreshRevealAnimations ===
          'function'
        ) {

          SWM.refreshRevealAnimations();

        }

      }
    );
  }

  /* =========================================================
     FILTER EVENTS
     ========================================================= */

  [
    'f-branch',
    'f-subject',
    'f-year',
    'f-type',
    'f-category'
  ].forEach(id => {

    document.addEventListener(
      'change',
      e => {

        if (
          e.target.id === id
        ) {

          shown = 12;

          renderLib();

        }

      }
    );

  });

  /* =========================================================
     RESET FILTERS
     ========================================================= */

  document
    .querySelector(
      '#reset-filters'
    )
    ?.addEventListener(
      'click',
      () => {

        document
          .querySelectorAll(
            '#library-filters select'
          )
          .forEach(
            x => {
              x.value = '';
            }
          );

        shown = 12;

        renderLib();

      }
    );

  renderLib();

  /* =========================================================
     LATEST RESOURCES
     ========================================================= */

  const latest =
    document.querySelector(
      '#latest'
    );

  if (latest) {

    latest.innerHTML =
      [...d.resources]
        .sort(
          (a, b) =>
            String(
              b.dateAdded
            ).localeCompare(
              String(
                a.dateAdded
              )
            )
        )
        .slice(0, 6)
        .map(card)
        .join('');

    requestAnimationFrame(
      () => {

        if (
          typeof SWM.refreshRevealAnimations ===
          'function'
        ) {

          SWM.refreshRevealAnimations();

        }

      }
    );
  }

  /* =========================================================
     SUBJECT GRID
     ========================================================= */

  const sg =
    document.querySelector(
      '#subject-grid'
    );

  if (sg) {

    let branch = '';

    const tabs =
      document.querySelector(
        '#branch-tabs'
      );

    if (tabs) {

      tabs.innerHTML =
        d.branches
          .map(
            x => `

              <button
                class="btn ${
                  x.id === 'scientific'
                    ? 'btn-primary'
                    : ''
                }"
                data-branch-tab="${x.id}"
              >
                ${x.name}
              </button>

            `
          )
          .join('');

      function renderSubjects() {

        const list =
          d.subjects
            .map(s => {

              const count =
                d.resources.filter(
                  r =>
                    r.subject === s.name &&
                    (
                      branch === '' ||
                      r.branch === 'all' ||
                      r.branch === branch
                    )
                ).length;

              return `

                <a
                  class="card"
                  href="search.html?q=${encodeURIComponent(
                    s.name
                  )}"
                >

                  <img
                    class="card-image"
                    src="assets/images/card-image.jpg"
                    alt=""
                    loading="lazy"
                    onerror="this.style.display='none'"
                  >

                  <div
                    style="font-size:2rem"
                  >
                    ${s.icon}
                  </div>

                  <h3>
                    ${s.name}
                  </h3>

                  <p class="muted">
                    ${count} مصدر
                  </p>

                  <span class="btn">
                    فتح المادة
                  </span>

                </a>

              `;

            })
            .join('');

        sg.innerHTML = list;

        requestAnimationFrame(
          () => {

            if (
              typeof SWM.refreshRevealAnimations ===
              'function'
            ) {

              SWM.refreshRevealAnimations();

            }

          }
        );
      }

      tabs.addEventListener(
        'click',
        e => {

          const button =
            e.target.closest(
              '[data-branch-tab]'
            );

          if (!button) return;

          branch =
            button.dataset.branchTab;

          tabs
            .querySelectorAll(
              'button'
            )
            .forEach(
              x =>
                x.classList.remove(
                  'btn-primary'
                )
            );

          button.classList.add(
            'btn-primary'
          );

          renderSubjects();

        }
      );

      renderSubjects();
    }
  }

  /* =========================================================
     BRANCHES GRID
     ========================================================= */

  const bg =
    document.querySelector(
      '#branches-grid'
    );

  if (bg) {

    bg.innerHTML =
      d.branches
        .map(b => {

          const n =
            d.resources.filter(
              r =>
                r.branch === 'all' ||
                r.branch === b.id
            ).length;

          return `

            <a
              class="card"
              href="search.html?q=${encodeURIComponent(
                b.name
              )}"
            >

              <img
                class="card-image"
                src="assets/images/card-image.jpg"
                alt=""
                loading="lazy"
                onerror="this.style.display='none'"
              >

              <h2>
                ${b.name}
              </h2>

              <p class="muted">
                ${n} مصدر مرتبط بالفرع.
              </p>

              <span class="btn">
                استكشاف
              </span>

            </a>

          `;

        })
        .join('');

    requestAnimationFrame(
      () => {

        if (
          typeof SWM.refreshRevealAnimations ===
          'function'
        ) {

          SWM.refreshRevealAnimations();

        }

      }
    );
  }

})();
