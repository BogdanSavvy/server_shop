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

const mainSwiper = new Swiper('.swiper-main', {
	effect: "coverflow",
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true,
	speed: 400,
	spaceBetween: 100,
});

const cardSwiper = new Swiper('.card-swiper', {
	pagination: {
		el: '.swiper-pagination',
	},
	slidesPerView: 4,
	speed: 400,
	spaceBetween: 100,
});

//? Інтерактивний drop-down для сортування
const ddTrigger = document.querySelector('.custom-select__top');
const ddSelect = document.querySelector('.custom-select');
if (ddTrigger || ddSelect) {
	ddTrigger.addEventListener('click', () => {
		ddSelect.classList.toggle('custom-select--open');
	});
}

//? Інтерактивні drop-down фільтри
const filterTriggers = document.querySelectorAll('.catalog-filter__top');
const filterMenu = document.querySelectorAll('.catalog-filter');
const closeAllFiltersButton = document.querySelector('.hide-filters');

if (closeAllFiltersButton) {
	closeAllFiltersButton.addEventListener('click', () => {
		filterMenu.forEach(menu => {
			menu.classList.remove('catalog-filter--open');
		});
	});
}

if (filterTriggers || filterMenu) {
	filterTriggers.forEach((trigger, index) => {
		trigger.addEventListener('click', () => {
			filterMenu[index].classList.toggle('catalog-filter--open');
		});
	});
}

//? Інтерактивне повідомлення про покупку
const marketingMessage = document.querySelector('.marketing');
const closeMessageButton = document.querySelector('.marketing__close');

if (closeMessageButton) {
	closeMessageButton.addEventListener('click', () => {
		marketingMessage.classList.remove('marketing--visible');
	});
}

if (marketingMessage) {
	setTimeout(() => {
		marketingMessage.classList.add('marketing--visible');
	}, 3000);
	setTimeout(() => {
		marketingMessage.classList.remove('marketing--visible');
	}, 9000);
}

//? Інтерактивність для меню бургер
const triggerBurger = document.querySelector('.burger');
const navSidebar = document.querySelector('.nav');
const closeBurgerButton = document.querySelector('.nav__close');

if (triggerBurger) {
	triggerBurger.addEventListener('click', () => {
		triggerBurger.classList.toggle('burger--active');
		navSidebar.classList.toggle('nav--visible');
	});
}

if (closeBurgerButton) {
	closeBurgerButton.addEventListener('click', () => {
		navSidebar.classList.remove('nav--visible');
	});
}

//catalog-grid__content
//data-grid-columns
//catalog-columns__btn
//catalog-columns__btn--current

const catalogColumnsButtons = document.querySelectorAll(
	'.catalog-columns__btn',
);
const catalogGridContent = document.querySelector('.catalog-grid__content');

catalogColumnsButtons.forEach(button => {
	button.addEventListener('click', event => {
		event.currentTarget.classList.add('catalog-columns__btn--current');

		let ButonDataAttributeValue =
			event.currentTarget.getAttribute('data-columns');

		catalogGridContent.setAttribute(
			'data-grid-columns',
			ButonDataAttributeValue,
		);
	});
});

//? Динамічний інпут
const input = document.getElementById('input');
const stepPlusButton = document.querySelector('.stepper__btn--plus');
const stepMinusButton = document.querySelector('.stepper__btn--minus');

stepPlusButton.addEventListener('click', () => {
	if (input.value < 5) {
		stepPlusButton.classList.remove('stepper__btn--disabled');
		input.value = +input.value + 1;
	} else {
		input.value = +input.value + 0;
	}
});

if (input.value >= 1) {
	stepMinusButton.classList.remove('stepper__btn--disabled');
}

stepMinusButton.addEventListener('click', () => {
	if (input.value >= 1) {
		input.value = +input.value - 1;
	} else {
		input.value = +input.value - 0;
	}
});

//? Перемикання кольрів для зміни контенту
const colorSelectButtons = document.querySelectorAll('.color-select__btn');
const cardSliders = document.querySelectorAll('.card-slider');

colorSelectButtons.forEach(button => {
	button.addEventListener('click', e => {
		let hasActiveClass = button.classList.contains('color-select__btn--active');
		if (e.target.getAttribute('data-color') === 'white') {
			for (let cardSlider of cardSliders) {
				if (cardSlider.getAttribute('data-color') === 'white') {
					cardSlider.classList.remove('visually-hidden');
				} else {
					cardSlider.classList.add('visually-hidden');
				}
			}
		}
		if (e.target.getAttribute('data-color') === 'black') {
			for (let cardSlider of cardSliders) {
				if (cardSlider.getAttribute('data-color') === 'black') {
					cardSlider.classList.remove('visually-hidden');
				} else {
					cardSlider.classList.add('visually-hidden');
				}
			}
		}

		if (hasActiveClass) {
			e.target.classList.remove('color-select__btn--active');
		} else {
			button.classList.add('color-select__btn--active');
		}
	});
});

//? Перемикання між описом та характеристиками товару
document.addEventListener('DOMContentLoaded', () => {
	let links = document.querySelectorAll('.card-description__link');

	links.forEach(link => {
		link.addEventListener('click', event => {
			event.preventDefault();

			let targetId = link.getAttribute('href').substring(1);
			let targetElement = document.querySelector(
				'[data-target="' + targetId + '"]',
			);

			document
				.querySelectorAll('.card-description__content')
				.forEach(contentElement => {
					if (contentElement !== targetElement) {
						contentElement.classList.remove(
							'card-description__content--active',
						);
					}
				});

			links.forEach(linkElement => {
				linkElement.classList.remove('card-description__link--active');
			});

			// Показуємо цільовий елемент контенту
			targetElement.classList.add('card-description__content--active');

			// Виділяємо цільове посилання
			link.classList.add('card-description__link--active');
		});
	});
});
