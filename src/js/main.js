'use strict';

//? Ініціалізація слайдера-свайпера
const swiper = new Swiper('.swiper', {
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true,
	autoplay: {
		delay: 7000,
	},
	speed: 400,
	spaceBetween: 100,
});

//? Інтерактивний drop-down для сортування
const ddTrigger = document.querySelector('.custom-select__top');
const ddSelect = document.querySelector('.custom-select');

ddTrigger.addEventListener('click', () => {
	console.log('click');
	ddSelect.classList.toggle('custom-select--open');
});

//? Інтерактивні drop-down фільтри
const filterTriggers = document.querySelectorAll('.catalog-filter__top');
const filterMenu = document.querySelectorAll('.catalog-filter');

filterTriggers.forEach((trigger, index) => {
	trigger.addEventListener('click', () => {
		filterMenu[index].classList.toggle('catalog-filter--open');
	});
});
