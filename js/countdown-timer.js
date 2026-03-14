/* ------------------ Countdown Timer ------------------ */
(function () {
    const el = document.getElementById("countdown-nav");
    if (!el) return; // safeguard if element is missing

    // Set festival date
    const festDate = new Date("march 16, 2026 09:00:00").getTime();

    function updateCountdown() {
        const now = Date.now();
        let diff = festDate - now;

        if (diff <= 0) {
            el.textContent = "🎉 Fest Started!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        el.textContent = `Starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Initial call
    updateCountdown();

    // Update every second
    setInterval(updateCountdown, 1000);
})();
