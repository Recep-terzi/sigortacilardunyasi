
function changeColor(element) {
    // Seçili olan öğenin sınıfını "selected" olarak ayarla
    // ve diğer öğelerin sınıfını temizle
    var items = document.querySelectorAll('.bar__left p');
    items.forEach(function(item) {
        if (item === element) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}