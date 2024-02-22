document.addEventListener('DOMContentLoaded', function() {
    var noButton = document.getElementById('noButton');

    noButton.addEventListener('mouseover', function() {
        moveButtonWithinBounds(noButton);
    });
});

function moveButtonWithinBounds(button) {
    var minX = 100; // Минимальное значение x
    var minY = 100; // Минимальное значение y
    var maxX = 500; // Максимальное значение x
    var maxY = 500; // Максимальное значение y

    var x = Math.random() * (maxX - minX) + minX;
    var y = Math.random() * (maxY - minY) + minY;

    // Проверяем, чтобы кнопка не выходила за пределы области
    if (x + button.offsetWidth > maxX) {
        x = maxX - button.offsetWidth;
    }
    if (y + button.offsetHeight > maxY) {
        y = maxY - button.offsetHeight;
    }

    button.style.left = x + 'px';
    button.style.top = y + 'px';
}
