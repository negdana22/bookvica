document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu__toggle');
    const closeArrow = document.getElementById('closeArrow');

    if (closeArrow) {
        closeArrow.addEventListener('click', function () {
            console.log('Клик по кнопке closeArrow');
            if (menuToggle) {
                menuToggle.checked = false; // Закрываем меню при клике на closeArrow
            }
        });
    }


});




function closesArrow() {
    const menuToggle = document.getElementById('menu__toggle');
    const closeArrow = document.getElementById('closeArrow');

    if (closeArrow) {
        closeArrow.addEventListener('click', function () {
            console.log('Клик по кнопке closeArrow');
            if (menuToggle) {
                menuToggle.checked = false; // Закрываем меню при клике на closeArrow
            }
        });
    }


}


// Создание колоды карт
const cards = [
    { id: 1, name: 'Card 1' },
    { id: 2, name: 'Card 2' },
    { id: 3, name: 'Card 3' },
    { id: 4, name: 'Card 4' },
    { id: 5, name: 'Card 5' },
    { id: 6, name: 'Card 6' },
    { id: 7, name: 'Card 7' },
    { id: 8, name: 'Card 8' },
    { id: 9, name: 'Card 9' },
    { id: 10, name: 'Card 10' },
    { id: 11, name: 'Card 11' },
    { id: 12, name: 'Card 12' },
    { id: 13, name: 'Card 13' },
    { id: 14, name: 'Card 14' },
    { id: 15, name: 'Card 15' },
    { id: 16, name: 'Card 16' },
    { id: 17, name: 'Card 17' },
    { id: 18, name: 'Card 18' },
    { id: 19, name: 'Card 19' },
    { id: 20, name: 'Card 20' },
    { id: 21, name: 'Card 21' },
    { id: 22, name: 'Card 22' },
    { id: 23, name: 'Card 23' },
    { id: 24, name: 'Card 24' },
    { id: 25, name: 'Card 25' },
    { id: 26, name: 'Card 26' },
    { id: 27, name: 'Card 27' },
    { id: 28, name: 'Card 28' },
    { id: 29, name: 'Card29' },
    { id: 30, name: 'Card 30' },
    { id: 31, name: 'Card 31' },
    { id: 32, name: 'Card 32' },
    { id: 33, name: 'Card 33' },
    { id: 34, name: 'Card 34' },
    { id: 35, name: 'Card 35' },
    { id: 36, name: 'Card 36' },
    { id: 37, name: 'Card 37' },
    { id: 38, name: 'Card 38' },
    { id: 39, name: 'Card 39' },
    { id: 40, name: 'Card 40' },
    { id: 41, name: 'Card 41' },
    { id: 42, name: 'Card 42' },
    { id: 43, name: 'Card 43' },
    { id: 44, name: 'Card 44' },
    { id: 45, name: 'Card 45' },
    { id: 46, name: 'Card 46' },
    { id: 47, name: 'Card 47' },
    { id: 48, name: 'Card 48' },
    { id: 49, name: 'Card 49' },
];

// Перемешивание колоды
function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = copy[i];
        copy[i] = copy[j];
        copy[j] = tmp;
    }
    return copy;
}

// Функция для создания и отображения игрового поля
function createGameBoard() {
    const gameBoard = document.getElementById('game-board');
    if (!gameBoard) {
        return;
    }
    gameBoard.innerHTML = '';

    // Перемешиваем колоду
    const shuffledCards = shuffle(cards);
    console.log('Порядок id карт после перемешивания:', shuffledCards.map(card => card.id));
    // Создаем элементы для каждой карты и добавляем их на игровое поле
    for (const card of shuffledCards) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id;
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    }
}

function createDayBoard() {
    const gameBoard = document.getElementById('game-board');
    if (!gameBoard) {
        return;
    }
    gameBoard.innerHTML = '';
    const shuffledCards = shuffle(cards);
    for (const card of shuffledCards) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id;
        cardElement.addEventListener('click', flipDayCard);
        gameBoard.appendChild(cardElement);
    }
}

function flipDayCard(event) {
    const selectedCard = event.target.closest('.card');
    if (!selectedCard || selectedCard.classList.contains('front')) {
        return;
    }
    if (document.querySelector('#game-board .card.front')) {
        return;
    }
    selectedCard.classList.add('front');
    const cardId = selectedCard.dataset.id;
    setTimeout(function () {
        localStorage.setItem('dayCard', cardId);
        loadContent('day-result.txt');
    }, 1700);
}


// Инициализируем массив для хранения выбранных карт
let selectedCardsArray = [];

// Функция для переворота карты
function flipCard(event) {
    // Получаем выбранную карту из события
    const selectedCard = event.target;

    // Проверяем, не выбрана ли уже максимальное количество карт
    const flippedCards = document.querySelectorAll('.card.front');
    if (flippedCards.length >= 4 || selectedCard.classList.contains('front')) {
        // Выводим сообщение в консоль, если карта уже выбрана или достигнуто максимальное количество выбранных карт.
        console.log('Карта уже выбрана или достигнуто максимальное количество выбранных карт.');
        return;
    }

    // Переключаем класс, чтобы перевернуть карту
    selectedCard.classList.toggle('front');

    // Выводим информацию о том, какую карту мы перевернули
    console.log('Перевернута карта с id:', selectedCard.dataset.id);

    // Добавляем id выбранной карты в массив выбранных карт
    selectedCardsArray.push(selectedCard);

    // Выводим информацию о выбранных картах в консоль
    console.log('Выбранные карты:', selectedCardsArray);

    // Проверяем, достигнуто ли максимальное количество карт после текущего выбора
    if (selectedCardsArray.length === 4) {
        // Выводим сообщение о том, что 4 карты выбраны и начинаем подготовку к переходу
        console.log('4 карты выбраны. Подготовка к переходу...');

        // Устанавливаем таймаут для эмуляции задержки и ждем 1500 миллисекунд
        setTimeout(() => {
            console.log('Переход на новую страницу (result.html)');

            // Показываем результаты на новой странице, передав выбранные карты
            showResultPage('result.html', selectedCardsArray);

            // Сбрасываем массив выбранных карт после перехода
            selectedCardsArray = [];
        }, 1500);
    }
}






// Показывает результаты на новой странице
function showResultPage(page, selectedCardsArray) {
    try {
        console.log('Попытка перехода на страницу:', page);

        // Загружаем контент из файла result.txt (похоже, вызов функции loadContent отсутствует в предоставленном коде)
        loadContent('result.txt');

        // Извлекаем значения свойства id из каждой карты в массиве selectedCardsArray
        const flippedCardIds = selectedCardsArray.map(card => card.dataset.id).filter(Boolean);

        // Передаем выбранные карты на новую страницу, сохраняя их в локальном хранилище в формате JSON
        localStorage.setItem('flippedCards', JSON.stringify(flippedCardIds));

        console.log('Передача данных');
        console.log('Переход успешно выполнен.');
    } catch (error) {
        console.error('Ошибка при переходе:', error);
    }
}
// Инициализация игрового поля при загрузке страницы
window.addEventListener('load', createGameBoard);

function changeLabelStyle(labelId) {
    console.log('Изменение стилей метки:', labelId);
    
    var label = document.getElementById(labelId);
    var input = document.getElementById(labelId.replace('Label', ''));
    var textarea = document.getElementById(labelId.replace('Label', '')); // Добавлено для textarea

    if ((label && input) || (label && textarea)) {
        console.log('Метка и поле ввода/textarea найдены. Изменение стилей.');

        label.style.transform = "translate(30%, 10%)";
        label.style.color = '#BE956F';
        label.style.fontFamily = 'Inter';
        label.style.fontSize = '12px';
        label.style.fontStyle = 'normal';
        label.style.fontWeight = '400';
        label.style.lineHeight = '160%';
    }
}

function resetLabelStyle(labelId) {
    console.log('Сброс стилей метки:', labelId);

    var label = document.getElementById(labelId);
    var input = document.getElementById(labelId.replace('Label', ''));
    var textarea = document.getElementById(labelId.replace('Label', '')); // Добавлено для textarea

    if ((label && input && input.value === "") || (label && textarea && textarea.value === "")) {
        console.log('Метка и поле ввода/textarea найдены. Сброс стилей.');

        label.style.transform = "translate(20%, 50%)";
        label.style.color = '#FFF';
        label.style.fontFamily = 'Inter';
        label.style.fontSize = '16px';
        label.style.fontStyle = 'normal';
        label.style.fontWeight = '400';
        label.style.lineHeight = '160%';
    }
}

function checkInput(inputId) {
    console.log('Проверка ввода:', inputId);

    var labelId = inputId + 'Label';
    var label = document.getElementById(labelId);
    var input = document.getElementById(inputId);
    var textarea = document.getElementById(inputId); // Добавлено для textarea

    if ((input && input.value !== "") || (textarea && textarea.value !== "")) {
        console.log('Поле ввода/textarea не пустое. Изменение стилей метки.');
        changeLabelStyle(labelId);
    } else {
        console.log('Поле ввода/textarea пустое. Сброс стилей метки.');
        resetLabelStyle(labelId);
    }
}




function changeLabelStylearea(labelId) {
    console.log('Изменение стилей метки для textarea:', labelId);
    
    var label = document.getElementById(labelId);
    var input = document.getElementById(labelId.replace('Label', ''));
    var textarea = document.getElementById(labelId.replace('Label', '')); // Добавлено для textarea

    if ((label && input) || (label && textarea)) {
        console.log('Метка и поле ввода/textarea найдены. Изменение стилей.');

        label.style.transform = "translate(26.5%, 10%)";
        label.style.color = '#BE956F';
        label.style.fontFamily = 'Inter';
        label.style.fontSize = '12px';
        label.style.fontStyle = 'normal';
        label.style.fontWeight = '400';
        label.style.lineHeight = '160%';
    }
}

function resetLabelStylearea(labelId) {
    console.log('Сброс стилей метки для textarea:', labelId);

    var label = document.getElementById(labelId);
    var input = document.getElementById(labelId.replace('Label', ''));
    var textarea = document.getElementById(labelId.replace('Label', '')); // Добавлено для textarea

    if ((label && input && input.value === "") || (label && textarea && textarea.value === "")) {
        console.log('Метка и поле ввода/textarea найдены. Сброс стилей.');

        label.style.transform = "translate(20%, 50%)";
        label.style.color = '#FFF';
        label.style.fontFamily = 'Inter';
        label.style.fontSize = '16px';
        label.style.fontStyle = 'normal';
        label.style.fontWeight = '400';
        label.style.lineHeight = '160%';
    }
}

function checkInputarea(inputId) {
    console.log('Проверка ввода для textarea:', inputId);

    var labelId = inputId + 'Label';
    var label = document.getElementById(labelId);
    var input = document.getElementById(inputId);
    var textarea = document.getElementById(inputId); // Добавлено для textarea

    if ((input && input.value !== "") || (textarea && textarea.value !== "")) {
        console.log('Поле ввода/textarea не пустое. Изменение стилей метки.');
        changeLabelStylearea(labelId);
    } else {
        console.log('Поле ввода/textarea пустое. Сброс стилей метки.');
        resetLabelStylearea(labelId);
    }
}



// Функция для генерации случайного числа для капчи
function generateRandomNumber() {
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}

// Начальная настройка: генерация первого числа для капчи
var currentCaptchaNumber = generateRandomNumber();



// Функция для отрисовки капчи на холсте с стилями и дополнительными элементами
function drawCaptcha(number) {
    var canvas = document.getElementById("captchaCanvas");
    var ctx = canvas.getContext("2d");

    // Очистка холста
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Отрисовка дополнительных элементов (например, прямоугольников)
    for (var i = 0; i < 5; i++) {
        ctx.fillStyle = getRandomColor(); // получение случайного цвета
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 20, 20);
    }

    // Отрисовка текста капчи разными шрифтами и размерами
    var numberString = number.toString();
    var digitWidth = canvas.width / 4;

    for (var i = 0; i < numberString.length; i++) {
        var fontSize = Math.floor(Math.random() * 20) + 20; // случайный размер шрифта от 20 до 40
        var fontFamily = "Arial"; // или другой шрифт по вашему выбору

        ctx.font = "bold " + fontSize + "px " + fontFamily;
        ctx.fillStyle = "#007bff"; // текст капчи будет синим цветом

        // Размещение каждой цифры с небольшим смещением и вращением
        var x = i * digitWidth + digitWidth / 2 + Math.random() * 10 - 5;
        var y = canvas.height / 2 + Math.random() * 10 - 5;
        var rotation = Math.random() * 10 - 5;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.fillText(numberString.charAt(i), -digitWidth / 2, 0);
        ctx.restore();
    }
}

// Функция для генерации случайного цвета
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Первоначальная отрисовка капчи
drawCaptcha(currentCaptchaNumber);

// Функция для обновления капчи
function refreshCaptcha() {
    // Генерация нового числа для капчи
    currentCaptchaNumber = generateRandomNumber();

    // Обновление холста с новым числом для капчи
    drawCaptcha(currentCaptchaNumber);

    // Очистка введенного числа для капчи
    document.getElementById("captchaDigits").value = "";
}

function isValidEmail(email) {
    // Простая проверка формата адреса электронной почты
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    // Сбросить сообщение об ошибке
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.classList.add("hidden");
    console.log('Сбросить сообщение об ошибке');
    // Установка цвета текста в красный
    errorMessage.style.color = "#FF6363";
    console.log('Установка цвета текста в красный');
    // Проверка имени пользователя
    var username = document.getElementById("username").value;
    if (username === "") {
        errorMessage.textContent = "* Пожалуйста, введите ваше имя.";
        errorMessage.classList.remove("hidden");
        console.log('Ошибка: Имя пользователя не введено.');
        return false;
    } else {
        console.log('Имя пользователя введено успешно.');
    }

    // Проверка электронной почты
    var email = document.getElementById("email").value;
    if (email === "" || !isValidEmail(email)) {
        errorMessage.textContent = "* Пожалуйста, введите корректный адрес электронной почты.";
        errorMessage.classList.remove("hidden");
        console.log('Ошибка: Некорректный адрес электронной почты.');
        return false;
    } else {
        console.log('Адрес электронной почты введен успешно.');
    }

    // Проверка сообщения (не менее 20 символов)
    var message = document.getElementById("message").value;
    if (message.length < 20) {
        errorMessage.textContent = "* Пожалуйста, введите сообщение длиной не менее 20 символов.";
        errorMessage.classList.remove("hidden");
        console.log('Ошибка: Сообщение менее 20 символов.');
        return false;
    } else {
        console.log('Сообщение введено успешно.');
    }

    // Проверка капчи
    var captchaDigits = document.getElementById("captchaDigits").value;
    if (captchaDigits !== currentCaptchaNumber.toString()) {
        errorMessage.textContent = "* Неправильно введены символы капчи.";
        errorMessage.classList.remove("hidden");
        console.log('Ошибка: Неправильные символы капчи.');
        return false;
    } else {
        console.log('Капча введена успешно.');
    }

    // Проверка согласия с условиями
    var agreeCheckbox = document.getElementById("agree");
    if (!agreeCheckbox.checked) {
        errorMessage.textContent = "* Вы должны принять условия пользовательского соглашения.";
        errorMessage.classList.remove("hidden");
        console.log('Ошибка: Согласие с условиями не получено.');
        return false;
    } else {
        console.log('Согласие с условиями получено успешно.');
    }

    // Если все проверки пройдены, можно отправить форму
    sendFormData();
    console.log('Все проверки пройдены успешно. Форма отправлена.');
}

function sendFormData() { console.log("sendFormData 11")
    var xhr = new XMLHttpRequest();
    var formData = new URLSearchParams(new FormData(document.getElementById("contactForm")));
    console.log("sendFormData 11111")
    console.log("Отправляемые данные:", formData);
    xhr.open("POST", "sendEmail.php", true);
    xhr.onreadystatechange = function () {
        console.log("sendFormData 55511234")
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("sendFormData 11234")
            console.log("Ответ сервера:", xhr.responseText);
            if (xhr.responseText === "success") {
                console.log("sendFormData 2")
                // Успешная отправка данных на сервер
                // Выполнение дополнительных действий после успешной отправки
                console.log("sendFormData 31")
                sendEmails();
                console.log("sendFormData 3")
                loadContent('feedback-sent.txt')
                console.log("sendFormData 4")
            } else {
                // Ошибка при отправке данных
                console.error("Ошибка при отправке данных на сервер.");
                
            }
        }
    };
    xhr.send(formData);
}

function sendEmails() {
    // Дополнительная логика для отправки электронных писем
    fetch('sendEmail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'action=sendEmails', // Добавьте параметры, если необходимо
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка при отправке электронных писем');
        }
        return response.text();
    })
    .then(data => {
        // Дополнительные действия после успешной отправки электронных писем
        console.log(data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}

