document.addEventListener("DOMContentLoaded", () => {

    setupTheme();
    setupMobileMenu();
    loadStats();

});


/* =========================
   DARK MODE
========================= */

function setupTheme() {

    const button = document.getElementById("themeToggle");

    if (!button) return;

    const savedTheme =
        localStorage.getItem("study_theme") || "dark";

    document.documentElement.dataset.theme =
        savedTheme;

    updateThemeIcon();

    button.addEventListener("click", () => {

        const current =
            document.documentElement.dataset.theme;

        const next =
            current === "dark"
                ? "light"
                : "dark";

        document.documentElement.dataset.theme =
            next;

        localStorage.setItem(
            "study_theme",
            next
        );

        updateThemeIcon();

    });

}


function updateThemeIcon() {

    const button =
        document.getElementById("themeToggle");

    if (!button) return;

    const icon =
        button.querySelector("i");

    const theme =
        document.documentElement.dataset.theme;

    if (theme === "light") {

        icon.className =
            "fa-solid fa-sun";

    } else {

        icon.className =
            "fa-solid fa-moon";

    }

}


/* =========================
   MOBILE MENU
========================= */

function setupMobileMenu() {

    const button =
        document.getElementById("menuToggle");

    const menu =
        document.getElementById("mobileNav");

    if (!button || !menu) return;

    button.addEventListener("click", () => {

        menu.classList.toggle("open");

    });

}


/* =========================
   STATISTICS
========================= */

async function loadStats() {

    try {

        const response =
            await fetch("content.json");

        const data =
            await response.json();

        const files =
            data.files || [];

        const links =
            data.importantLinks || [];

        const dirs =
            data.directorates || [];

        const subjects =
            new Set(
                files.map(file => file.subject)
            );

        setText(
            "filesCount",
            files.length
        );

        setText(
            "subjectsCount",
            subjects.size
        );

        setText(
            "linksCount",
            links.length
        );

        setText(
            "dirsCount",
            dirs.length
        );

    } catch (error) {

        console.error(error);

    }

}


function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {
        element.textContent = value;
    }

}
