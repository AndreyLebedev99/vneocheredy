const page1 = document.querySelector('.modal-cart__page1');
const page2 = document.querySelector('.modal-cart__page2');

const cartWrapper = document.querySelector('.modal-cart__scroll');

window.addEventListener('click', function (event) {

	// Показать модельное окно и выключить скролл
	if (event.target.dataset.open === 'openCart') {
		document.querySelector('.modal-cart').classList.remove('hidden');
		
		document.querySelector('body').classList.add('no-scroll');
	}

	// Скрыть модельное окно и включить скролл
	if (event.target.dataset.close === 'close') {
		document.querySelector('.modal-cart').classList.add('hidden');
		document.querySelector('body').classList.remove('no-scroll');

		page1.classList.remove('hidden');
		page2.classList.add('hidden');
	}

	// Переключение между page1 и page2
	if (event.target.dataset.continue === 'true') {
		page1.classList.add('hidden');
		page2.classList.remove('hidden');
	} else if (event.target.dataset.back === 'true') {
		page2.classList.add('hidden');
		page1.classList.remove('hidden');
	}
	
	if (event.target.hasAttribute('data-cart')) {

		const card = event.target.closest('.product__item');
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product__icon').getAttribute('src'),
			name: card.querySelector('.product__name').innerText,
			price: card.querySelector('.product__price').innerText,
			counter: card.querySelector('[data-counter]').innerText
		}

		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		if (itemInCart) {
			const counterEl = itemInCart.querySelector('[data-counter]');
			counterEl.innerText = +counterEl.innerText + +productInfo.counter;
		} else {
			const cartItemHTML = 	`<div id="cart-item-${productInfo.id}" class="modal-cart__item cart-item" data-id="${productInfo.id}">
										<div class="cart-item__column">
											<div class="cart-item__img" data-item="img">
												<img src="${productInfo.imgSrc}" alt="">
											</div>

											<div class="cart-item__name" data-item="name">
												${productInfo.name}
											</div>
										</div>

										<div class="cart-item__column">
											<div class="cart-item__amount product__amount" data-item="amount">
												<div class="product-circle" data-action="minus">-</div>
												<div class="product__num" data-counter>${productInfo.counter}</div>
												<div class="product-circle" data-action="plus">+</div>
											</div>

											<div class="cart-item__prise" data-item="prise">${productInfo.price}</div>
										</div>
									</div>`;

			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
		}

		card.querySelector('[data-counter]').innerText = '1';
		
		calcCartPrice();
	}
})