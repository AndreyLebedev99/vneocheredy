window.onload = function () {
	$.ajax({
        url: 'https://vne-ocheredi.herokuapp.com' + '/products?' + window.location.search.replace( '?', ''),
        type: 'get',
        success: function (data) {
            data.forEach(elem => {
                const productsHTML = `<div id="product-item-${elem.id}" class="product__item" data-id="${elem.id}">
                                        <img src="${elem.image}" alt="" class="product__icon" data-circle="main-circle">
                                        <img src="./img/products/hover-circle.png" alt="" class="circle-bg" data-circle="circle">
                                        <div class="product__info">
                                            <div class="product__name">${elem.name}</div>
                                            <div class="product__price">${elem.price}</div>
                                            <div class="product__amount">
                                                <div class="product-circle" data-action="minus">-</div>
                                                <div class="product__num" data-counter>1</div>
                                                <div class="product-circle" data-action="plus">+</div>
                                            </div>
                                            <div class="product__buy">
                                                <a href="#" data-cart>Купить</a>
                                            </div>
                                        </div>
                                    </div>`
                
            document.querySelector('.products').insertAdjacentHTML('beforeend', productsHTML);
            });
        }
    });

	
	
}