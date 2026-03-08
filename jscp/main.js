// Ocultar hint de ajustes tras 3 segundos (sin servicios ni base de datos)
document.addEventListener('DOMContentLoaded', function () {
    const settingsHint = document.getElementById('settingsHint');
    if (settingsHint) {
        setTimeout(function () {
            settingsHint.style.display = 'none';
        }, 3000);
    }
});
