window.addEventListener('click', function (event) {
	const sliderYes = this.document.querySelector('.slider__yes');
	const sliderNo = this.document.querySelector('.slider__no');
	
	if (event.target.dataset.slider === 'active') {
		sliderYes.classList.toggle('active');
		sliderNo.classList.toggle('active');
	}
})