
function changeColor(element) {
    var items = document.querySelectorAll('.bar__left p');
    items.forEach(function(item) {
        if (item === element) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}