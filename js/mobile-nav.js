// ===== Mobile Nav JS =====
(function () {
    const hamb = document.querySelector(".anu-hamburger");
    const mobile = document.querySelector(".anu-mobile-nav");
    const overlay = document.querySelector(".anu-nav-overlay");
    const links = mobile.querySelectorAll(".anu-mobile-link");

    function openMenu() {
        mobile.classList.add("open");
        overlay.classList.add("show");
        hamb.classList.add("active");
        hamb.setAttribute("aria-expanded", "true");
        mobile.setAttribute("aria-hidden", "false");
        overlay.setAttribute("aria-hidden", "false");

        // stagger animation
        links.forEach((a, i) => {
            setTimeout(() => {
                a.setAttribute("data-shown", "1");
            }, i * 80);
        });
    }

    function closeMenu() {
        mobile.classList.remove("open");
        overlay.classList.remove("show");
        hamb.classList.remove("active");
        hamb.setAttribute("aria-expanded", "false");
        mobile.setAttribute("aria-hidden", "true");
        overlay.setAttribute("aria-hidden", "true");

        links.forEach((a) => {
            a.removeAttribute("data-shown");
        });
    }

    hamb.addEventListener("click", (e) => {
        e.stopPropagation();
        mobile.classList.contains("open") ? closeMenu() : openMenu();
    });

    links.forEach(a => a.addEventListener("click", () => closeMenu()));
    overlay.addEventListener("click", closeMenu);

    document.addEventListener("click", (e) => {
        if (mobile.classList.contains("open") && !mobile.contains(e.target) && !hamb.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && mobile.classList.contains("open")) {
            closeMenu();
        }
    });
})();
