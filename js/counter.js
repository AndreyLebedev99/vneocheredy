window.addEventListener('click', function (event) {
	let counter;

	if (event.target.dataset.action === "minus" || event.target.dataset.action === "plus") {

		const counterWrapper = event.target.closest('.product__amount');
		counter = counterWrapper.querySelector('[data-counter]');
	}

	if (event.target.dataset.action === 'minus') {

		if  (+counter.innerText > 1) {

			counter.innerText = --counter.innerText;

		}  else if (event.target.closest('.modal-cart__scroll') && +counter.innerText === 1 ) {

			event.target.closest('.cart-item').remove();

			calcCartPrice();
		}
	}

	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	if (event.target.hasAttribute('data-action') && event.target.closest('.modal-cart__scroll')) {
		calcCartPrice();
	}
})