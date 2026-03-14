// Filter functionality
const filterBtns = document.querySelectorAll(".event-filter-btn");
const eventCards = document.querySelectorAll(".event-card");
const searchInput = document.querySelector(".event-search");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".event-filter-btn.active").classList.remove("active");
        btn.classList.add("active");
        const category = btn.getAttribute("data-filter");

        eventCards.forEach(card => {
            if (category === "all" || card.getAttribute("data-category") === category) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Search functionality
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    eventCards.forEach(card => {
        const title = card.querySelector(".event-title").textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});
