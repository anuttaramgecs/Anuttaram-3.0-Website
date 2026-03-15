// Filter, lightbox, keyboard navigation
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll(".anu-gallery-btn");
    const galleryItems = Array.from(document.querySelectorAll(".anu-gallery-item"));
    const lightbox = document.getElementById("anu-gallery-lightbox");
    const lightboxImg = document.getElementById("anu-gallery-lightbox-img");
    const closeBtn = document.getElementById("anu-gallery-close");
    const prevBtn = document.getElementById("anu-gallery-prev");
    const nextBtn = document.getElementById("anu-gallery-next");

    // Filter logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('anu-gallery-active'));
            btn.classList.add('anu-gallery-active');
            const filter = btn.dataset.filter;
            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) item.classList.remove('hidden');
                else item.classList.add('hidden');
            });
        });
    });

    // Lightbox open
    let currentIndex = -1;
    function openLightbox(index) {
        const item = galleryItems[index];
        if (!item) return;
        const img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
        lightbox.setAttribute('aria-hidden', 'false');
        lightbox.classList.add('open');
        currentIndex = index;
        // focus for keyboard
        closeBtn.focus();
    }

    function closeLightbox() {
        lightbox.setAttribute('aria-hidden', 'true');
        lightbox.classList.remove('open');
        currentIndex = -1;
    }

    galleryItems.forEach((item, i) => {
        const img = item.querySelector('img');
        img.addEventListener('click', () => openLightbox(i));
        // allow keyboard open (Enter/Space) when item is focused
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(i); }
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxImg) { /* clicking image should NOT close */ }
        // clicking backdrop (not controls) closes
        if (e.target === lightbox) closeLightbox();
    });

    // navigation
    function showNext() {
        if (currentIndex < 0) return;
        // find next visible index
        let i = currentIndex;
        do { i = (i + 1) % galleryItems.length; } while (galleryItems[i].classList.contains('hidden') && i !== currentIndex);
        openLightbox(i);
    }
    function showPrev() {
        if (currentIndex < 0) return;
        let i = currentIndex;
        do { i = (i - 1 + galleryItems.length) % galleryItems.length; } while (galleryItems[i].classList.contains('hidden') && i !== currentIndex);
        openLightbox(i);
    }

    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    // keyboard
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('open')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        }
    });
});
