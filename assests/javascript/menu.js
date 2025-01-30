// JavaScript for left and right buttons to scroll the food items
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const foodItems = document.querySelector('.food-items');
let scrollAmount = 0;
const itemWidth = document.querySelector('.food-item').offsetWidth + 20; // Including margin

leftBtn.addEventListener('click', () => {
    scrollAmount -= itemWidth;
    if (scrollAmount < 0) scrollAmount = 0; // Prevent scrolling beyond the left edge
    foodItems.style.transform = `translateX(-${scrollAmount}px)`;
});

rightBtn.addEventListener('click', () => {
    scrollAmount += itemWidth;
    if (scrollAmount > foodItems.scrollWidth - foodItems.offsetWidth) {
        scrollAmount = foodItems.scrollWidth - foodItems.offsetWidth; // Prevent scrolling beyond the right edge
    }
    foodItems.style.transform = `translateX(-${scrollAmount}px)`;
});
