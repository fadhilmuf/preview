(function () {
    'use strict';

    /* ---- UTC Clock ---- */
    const clockEl = document.getElementById('utcClock');
    if (clockEl) {
        function updateClock() {
            const n = new Date();
            const utcOffset = 7;
            const hour = (n.getUTCHours() + utcOffset) % 24;
            clockEl.textContent =
                String(hour).padStart(2, '0') + ':' +
                String(n.getUTCMinutes()).padStart(2, '0') + ':' +
                String(n.getUTCSeconds()).padStart(2, '0') + ' UTC+7';
        }
        updateClock();
        setInterval(updateClock, 1000);
    }

})();