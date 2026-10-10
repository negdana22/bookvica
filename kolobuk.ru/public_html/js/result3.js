// result.js
const cardImages = {
    'Card 1': 'image/big-card/Group 1.png',
    'Card 2': 'image/big-card/Group 2.png',
    'Card 3': 'image/big-card/Group 3.png',
    'Card 4': 'image/big-card/Group 4.png',
    'Card 5': 'image/big-card/Group 5.png',
    'Card 6': 'image/big-card/Group 6.png',
    'Card 7': 'image/big-card/Group 7.png',
    'Card 8': 'image/big-card/Group 8.png',
    'Card 9': 'image/big-card/Group 9.png',
    'Card 10': 'image/big-card/Group 10.png',
    'Card 11': 'image/big-card/Group 11.png',
    'Card 12': 'image/big-card/Group 12.png',
    'Card 13': 'image/big-card/Group 13.png',
    'Card 14': 'image/big-card/Group 14.png',
    'Card 15': 'image/big-card/Group 15.png',
    'Card 16': 'image/big-card/Group 16.png',
    'Card 17': 'image/big-card/Group 17.png',
    'Card 18': 'image/big-card/Group 18.png',
    'Card 19': 'image/big-card/Group 19.png',
    'Card 20': 'image/big-card/Group 20.png',
    'Card 21': 'image/big-card/Group 21.png',
    'Card 22': 'image/big-card/Group 22.png',
    'Card 23': 'image/big-card/Group 23.png',
    'Card 24': 'image/big-card/Group 24.png',
    'Card 25': 'image/big-card/Group 25.png',
    'Card 26': 'image/big-card/Group 26.png',
    'Card 27': 'image/big-card/Group 27.png',
    'Card 28': 'image/big-card/Group 28.png',
    'Card 29': 'image/big-card/Group 29.png',
    'Card 30': 'image/big-card/Group 30.png',
    'Card 31': 'image/big-card/Group 31.png',
    'Card 32': 'image/big-card/Group 32.png',
    'Card 33': 'image/big-card/Group 33.png',
    'Card 34': 'image/big-card/Group 34.png',
    'Card 35': 'image/big-card/Group 35.png',
    'Card 36': 'image/big-card/Group 36.png',
    'Card 37': 'image/big-card/Group 37.png',
    'Card 38': 'image/big-card/Group 38.png',
    'Card 39': 'image/big-card/Group 39.png',
    'Card 40': 'image/big-card/Group 40.png',
    'Card 41': 'image/big-card/Group 41.png',
    'Card 42': 'image/big-card/Group 42.png',
    'Card 43': 'image/big-card/Group 43.png',
    'Card 44': 'image/big-card/Group 44.png',
    'Card 45': 'image/big-card/Group 45.png',
    'Card 46': 'image/big-card/Group 46.png',
    'Card 47': 'image/big-card/Group 47.png',
    'Card 48': 'image/big-card/Group 48.png',
    'Card 49': 'image/big-card/Group 49.png',
};


document.addEventListener('DOMContentLoaded', function () {
    // Получаем данные о выбранных картах из localStorage
    const flippedCardsData = localStorage.getItem('flippedCards');
    const flippedCards = JSON.parse(flippedCardsData);

    // Отображаем выбранные карты на странице
    if (flippedCards && flippedCards.length === 4) {
        const firstCard = document.querySelector('.first-card');
        const secondCard = document.querySelector('.second-card');
        const thirdCard = document.querySelector('.third-card');
        const fourthCard = document.querySelector('.fourth-card');
 

        // Заполняем содержимое карт
        firstCard.innerHTML = `<img src="${cardImages[`Card ${flippedCards[0]}`]}" alt="Card ${flippedCards[0]}">`;
        secondCard.innerHTML = `<img src="${cardImages[`Card ${flippedCards[1]}`]}" alt="Card ${flippedCards[1]}">`;
        thirdCard.innerHTML = `<img src="${cardImages[`Card ${flippedCards[2]}`]}" alt="Card ${flippedCards[2]}">`;
        fourthCard.innerHTML = `<img src="${cardImages[`Card ${flippedCards[3]}`]}" alt="Card ${flippedCards[3]}">`;

        // Затемняем вторую, третью и четвертую карты
        firstCard.style.opacity = 0.5;
        secondCard.style.opacity = 0.5;
        fourthCard.style.opacity = 0.5;

        // Выводим описание по первой карте
        // const pageText = document.querySelector('.worlds-text');
        // pageText.textContent = `Описание по карте ${flippedCards[0]}`;
    }
});


