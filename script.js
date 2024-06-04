
function changeColor(element) {
    var items = document.querySelectorAll('.bar__left p');
    items.forEach(function (item) {
        if (item === element) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const selectBox = document.querySelector('.select-box');
    const selectedOption = document.querySelector('.selected-option');
    const options = document.querySelectorAll('.option');
    const searchInput = document.querySelector('.search-input');

    selectBox.addEventListener('click', (event) => {
        if (event.target !== searchInput) {
            selectBox.classList.toggle('active');
        }
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selectedOption.textContent = option.textContent;
            selectBox.classList.remove('active');
        });
    });

    document.addEventListener('click', (event) => {
        if (!selectBox.contains(event.target)) {
            selectBox.classList.remove('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const selectBox = document.querySelector('.select-box2');
    const selectedOption = document.querySelector('.selected-option2');
    const options = document.querySelectorAll('.option2');
    const searchInput = document.querySelector('.search-input2');

    selectBox.addEventListener('click', (event) => {
        if (event.target !== searchInput) {
            selectBox.classList.toggle('active');
        }
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selectedOption.textContent = option.textContent;
            selectBox.classList.remove('active');
        });
    });

    document.addEventListener('click', (event) => {
        if (!selectBox.contains(event.target)) {
            selectBox.classList.remove('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const selectBox = document.querySelector('.select-box3');
    const selectedOption = document.querySelector('.selected-option3');
    const options = document.querySelectorAll('.option3');
    const searchInput = document.querySelector('.search-input3');

    selectBox.addEventListener('click', (event) => {
        if (event.target !== searchInput) {
            selectBox.classList.toggle('active');
        }
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selectedOption.textContent = option.textContent;
            selectBox.classList.remove('active');
        });
    });

    document.addEventListener('click', (event) => {
        if (!selectBox.contains(event.target)) {
            selectBox.classList.remove('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Metni al
    const nameElement = document.querySelector('.card__left p');
    const nameText = nameElement.textContent.trim();
    
    // Boşlukları "+" ile değiştir
    const formattedName = nameText.replace(/\s+/g, '+');
    
    // API URL'sini oluştur
    const apiUrl = `https://ui-avatars.com/api/?name=${formattedName}`;
    
    // API URL'sini img'nin src niteliğine ata
    const imgElement = document.getElementById('avatar');
    imgElement.src = apiUrl;
});