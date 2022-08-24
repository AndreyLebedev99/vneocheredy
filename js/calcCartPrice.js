function calcCartPrice() {
	const cartItems = document.querySelectorAll('.cart-item');
	const totalPriceEl = document.querySelectorAll('.sum__price');
	const deliveryCost = document.querySelector('.delivery-cost')
	const cartDelivery = document.querySelector('[data-cart-delivery]')
	let priceTotal = 0;

	cartItems.forEach(function (item) {
		const amountEl = item.querySelector('[data-counter]');
		const priceEl = item.querySelector('.cart-item__prise');

		const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
		
		priceTotal += currentPrice;
	})

	totalPriceEl.forEach(item => item.innerText = priceTotal + ' руб')
	
}