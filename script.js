
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
    console.log(nameElement)
    // Boşlukları "+" ile değiştir
    const formattedName = nameText.replace(/\s+/g, '+');

    // API URL'sini oluştur
    const apiUrl = `https://ui-avatars.com/api/?name=${formattedName}`;

    // API URL'sini img'nin src niteliğine ata
    const imgElement = document.getElementById('avatar');
    imgElement.src = apiUrl;
});

document.addEventListener('DOMContentLoaded', function () {
    // Metni al
    const nameElement = document.querySelector('.card__left .company__info');
    const nameText = nameElement.textContent.trim();
    console.log(nameElement)
    // Boşlukları "+" ile değiştir
    const formattedName = nameText.replace(/\s+/g, '+');

    // API URL'sini oluştur
    const apiUrl = `https://ui-avatars.com/api/?name=${formattedName}`;

    // API URL'sini img'nin src niteliğine ata
    const imgElement = document.getElementById('avatar2');
    imgElement.src = apiUrl;
});



document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu__center p');
    const profileBody = document.querySelector('.all__body');
    const pageTag = document.querySelector('.page__tag');
    let activeState = 'Genel Ayarlar';
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Aktif durumu güncelle
            activeState = event.currentTarget.textContent.trim();
            pageTag.innerHTML= activeState === 'Genel Ayarlar' ? 'Profil Düzenleme' : activeState
            // Tüm p öğelerinden aktif sınıfını kaldır
            menuItems.forEach(p => p.classList.remove('active'));

            // Tıklanan p öğesine aktif sınıfı ekle
            event.currentTarget.classList.add('active');

            // profile__body içeriğini güncelle
            updateProfileBody(activeState);
        });
    });

    function updateProfileBody(state) {
        switch (state) {
            case 'Genel Ayarlar':
                profileBody.innerHTML = `   <div class="profile__body">
                <div class="body__left">
                    <div class="double__input">
                        <div class="username">
                            <p>Adınız</p>
                            <input type="text">
                        </div>
                        <div class="surname">
                            <p>Soyadınız</p>
                            <input type="text">
                        </div>
                        <div class="phone__number">
                            <p>Telefon Numaranız</p>
                            <input type="text" placeholder="0 (5__) ___ __ __">
                        </div>
                        <div class="email">
                            <p>E-posta adresiniz</p>
                            <input type="text" placeholder="example@sigortacilardunyası.com">
                        </div>
                        <div class="ticari">
                            <p>Ticari Ünvanınız</p>
                            <input type="text">
                        </div>
                        <div class="Şirket Adresiniz">
                            <p>E-posta adresiniz</p>
                            <input type="text">
                        </div>
                        <div class="il">
                            <p>İl</p>
                            <input type="text">
                        </div>
                        <div class="İlçe">
                            <p>İlçe</p>
                            <input type="text">
                        </div>
                    </div>
                    <div class="uzman">
                        <p>Uzmanlık Alanları</p>
                        <input type="text">
                    </div>
                    <div class="tanım">
                        <p>Şirketinizi tanımlayan sloganınız</p>
                        <div class="tanım__input">
                            <p>
                                <span>Poliçe Tasarımı <img src="./assets/exitIcon.png" alt=""></span>
                            </p>
                            <p>
                                <span>Poliçe Tasarımı <img src="./assets/exitIcon.png" alt=""></span>
                            </p>
                        </div>
                    </div>
                    <p>Biyografi</p>
                    <div class="form__textarea">
                        <div class="textarea__button">
                            <p><img src="./assets/codeImg.png" alt="">Bold</p>
                            <p><img src="./assets/verticalImg.png" alt="">Align</p>
                        </div>
                        <textarea name="" id="" placeholder="Buraya Yazın..."></textarea>
                    </div>
                    <p>Hesap Yönetimi</p>
                    <div class="form__textarea" style="height: 205px;">
                        <div class="textarea__button" style="margin-left: 10px;">
                            <p><img src="./assets/arrow-bar-to-right.svg" alt="">Hesabımı Askıya al</p>
                        </div>
                        <textarea name="" id="" style="height: 114px;"
                            placeholder="Hesabınızı askıya alma sebebini yazınız..."></textarea>
                    </div>
                    <button><img src="./assets/saveIcon2.png" alt="">Kaydet</button>
                </div>

                <div class="body__right">
                    <p>Slider Resim Ekle</p>
                    <p>
                        <span>
                            <img src="./assets/editIcon2.png" alt="">
                            <span>Resmi Burayı Bırakın, <br /> Yapıştırın veya</span>
                            <span><img src="./assets/addIcon3.png" alt="">Bilgisayarınızdan Seçin</span>
                        </span>
                    </p>
                    <p>
                        <span>
                            <img src="./assets/editIcon2.png" alt="">
                        </span>
                    </p>
                </div>
            </div>`;
                break;
            case 'Güvenlik':
                profileBody.innerHTML = ` <div class="profile__body__security">
                <div class="old__password">
                    <p>Geçerli Şifren</p>
                    <input type="text">
                </div>
                <div class="new__password">
                    <p>Yeni Şifren</p>
                    <input type="text" placeholder="example@sigortacilardunyası.com">
                </div>
                <div class="renew__password">
                    <p>Yeni şifreni Tekrarla</p>
                    <input type="text">
                </div>
                <p><img src="./assets/saveIcon2.png" alt="">Yeni Şifre Belirle</p>
                <p>Diğer Açık Oturumlar</p>
                <div class="card">
                    <div class="card__left">
                        <img src="./assets/chrome.png" alt="">
                    <p>Giriş Zamanı Lokasyon Sistem IP</p>
                    </div>
                    <div class="card__center">
                        <span></span>
                        <p>15 Nisan, 17:25 Bursa Mac OS X 78.173.94.59</p>
                    </div>
                    <div class="card__right">
                        <img src="./assets/web.svg" alt=""> Oturumu Kapat
                    </div>
                </div>
                <div class="card">
                    <div class="card__left">
                        <img src="./assets/chrome.png" alt="">
                    <p>Giriş Zamanı Lokasyon Sistem IP</p>
                    </div>
                    <div class="card__center">
                        <span></span>
                        <p>15 Nisan, 17:25 Bursa Mac OS X 78.173.94.59</p>
                    </div>
                    <div class="card__right">
                        <img src="./assets/web.svg" alt=""> Oturumu Kapat
                    </div>
                </div>
            </div>`;
                break;
            case 'Bildirim Ayarları':
                profileBody.innerHTML = '<div class="notifications">Bildirim Ayarları İçeriği</div>';
                break;
            default:
                profileBody.innerHTML = '';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu__center p');
    const profileBody = document.querySelector('.all__bodys');
    const pageTag2 = document.querySelector('.page__tag2');

    let activeState = 'Blog Gönder';
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Aktif durumu güncelle
            activeState = event.currentTarget.textContent.trim();
            pageTag2.innerHTML= activeState

            // Tüm p öğelerinden aktif sınıfını kaldır
            menuItems.forEach(p => p.classList.remove('active'));

            // Tıklanan p öğesine aktif sınıfı ekle
            event.currentTarget.classList.add('active');

            // profile__body içeriğini güncelle
            updateProfileBody(activeState);
        });
    });

    function updateProfileBody(state) {
        switch (state) {
            case 'İşaretlenmiş':
                profileBody.innerHTML = ``;
                break;
            case 'Blog Gönder':
                profileBody.innerHTML = ` <div class="profile__body">
                <div class="body__left">
                    <div class="form__top">
                        <div class="title">
                            <p>Haber Başlığı</p>
                            <input type="text">
                        </div>
                        <div class="add">
                            <p>Etiket Ekle</p>
                            <div class="input">
                                <input type="text">
                                <img src="./assets/addIcon2.png" alt="">
                            </div>
                        </div>
                    </div>
                    <p>Haber Açıklaması</p>
                    <div class="form__textarea">
                        <div class="textarea__button">
                            <p><img src="./assets/newImage.png" alt="">Resim</p>
                            <p><img src="./assets/codeImg.png" alt="">Text</p>
                            <p><img src="./assets/verticalImg.png" alt="">Align</p>
                            <p><img src="./assets/linkImg.png" alt="">Link</p>
                        </div>
                        <textarea name="" id="" placeholder="Buraya Yazın..."></textarea>
                    </div>
                </div>
                <div class="body__right">
                    <p>Slider Resim Ekle</p>
                    <p>
                        <span>
                            <img src="./assets/editIcon2.png" alt="">
                            <span>Resmi Burayı Bırakın, <br /> Yapıştırın veya</span>
                            <span><img src="./assets/addIcon3.png" alt="">Bilgisayarınızdan Seçin</span>
                        </span>
                    </p>
                    <img src="./assets/hover-image.png" alt="">

                </div>
            </div>`;
                break;
            case 'Gönderilenler':
                profileBody.innerHTML = ` 
                <div class="post__body">
                    <div class="body__section">
                        <div class="section__left">
                            <p><span></span> Gönderileri Görüntüle</p>
                            <img src="./assets/background (1).png" alt="">
                        </div>
                        <div class="section__right">
                            <p><span></span> Gönderilerin Memnuniyeti</p>

                            <div class="emoji__cards">
                                <div class="emoji__card">
                                    <p>August 2022</p>
                                    <img src="./assets/emoji1.png" alt="">
                                    <p>20 Points</p>
                                </div>
                                <div class="emoji__card">
                                    <p>August 2022</p>
                                    <img src="./assets/emoji2.png" alt="">
                                    <p>20 Points</p>
                                </div>
                                <div class="emoji__card">
                                    <p>August 2022</p>
                                    <img src="./assets/emoji3.png" alt="">
                                    <p>20 Points</p>
                                </div>
                                <div class="emoji__card">
                                    <p>August 2022</p>
                                    <img src="./assets/emoji1.png" alt="">
                                    <p>20 Points</p>
                                </div>
                                <div class="emoji__card">
                                    <p>August 2022</p>
                                    <img src="./assets/emoji2.png" alt="">
                                    <p>20 Points</p>
                                </div>
                                <div class="emoji__card">
                                    <p>August 2022</p>
                                    <img src="./assets/emoji3.png" alt="">
                                    <p>20 Points</p>
                                </div>
                                <div class="emoji__card">
                                    <p>August 2022</p>
                                    <img src="./assets/emoji1.png" alt="">
                                    <p>20 Points</p>
                                </div>
                                <div class="emoji__card">
                                    <p>August 2022</p>
                                    <img src="./assets/emoji2.png" alt="">
                                    <p>20 Points</p>
                                </div>
                                <div class="emoji__card">
                                    <p>August 2022</p>
                                    <img src="./assets/emoji3.png" alt="">
                                    <p>20 Points</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="all__posts">
                        <p><span></span> Gönderileri Görüntüle</p>
                        <div class="posts">
                            <div class="post">
                                <img src="./assets/post.jpg" alt="">
                                <p>Opening Day of Boating Season, Seattle WA</p>
                                <div class="post__menu">
                                    <div class="menu__left">
                                        <p><img src="./assets/eye.png" alt=""> 15k</p>
                                        <p><img src="./assets/star.png" alt=""> 4.5</p>
                                    </div>
                                    <div class="menu__right">
                                        <img src="./assets/editIcon3.png" alt="">
                                        <img src="./assets/delete.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="post">
                                <img src="./assets/post.jpg" alt="">
                                <p>Opening Day of Boating Season, Seattle WA</p>
                                <div class="post__menu">
                                    <div class="menu__left">
                                        <p><img src="./assets/eye.png" alt=""> 15k</p>
                                        <p><img src="./assets/star.png" alt=""> 4.5</p>
                                    </div>
                                    <div class="menu__right">
                                        <img src="./assets/editIcon3.png" alt="">
                                        <img src="./assets/delete.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="post">
                                <img src="./assets/post.jpg" alt="">
                                <p>Opening Day of Boating Season, Seattle WA</p>
                                <div class="post__menu">
                                    <div class="menu__left">
                                        <p><img src="./assets/eye.png" alt=""> 15k</p>
                                        <p><img src="./assets/star.png" alt=""> 4.5</p>
                                    </div>
                                    <div class="menu__right">
                                        <img src="./assets/editIcon3.png" alt="">
                                        <img src="./assets/delete.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="post">
                                <img src="./assets/post.jpg" alt="">
                                <p>Opening Day of Boating Season, Seattle WA</p>
                                <div class="post__menu">
                                    <div class="menu__left">
                                        <p><img src="./assets/eye.png" alt=""> 15k</p>
                                        <p><img src="./assets/star.png" alt=""> 4.5</p>
                                    </div>
                                    <div class="menu__right">
                                        <img src="./assets/editIcon3.png" alt="">
                                        <img src="./assets/delete.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          `;
                break;
            default:
                profileBody.innerHTML = '';
        }
    }
});