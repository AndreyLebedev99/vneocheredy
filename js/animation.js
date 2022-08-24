let animItems = document.querySelectorAll('.anim-items');

const btnArm = document.querySelector('.slogan__btn');


// анимация при прокрутке главной страницы

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			
			let animItemPoint = (window.innerHeight - animItemHeight / animStart) / 1.06;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = (window.innerHeight - window.innerHeight / animStart) / 1.06;
			}

			if ((scrollY >animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active')
			} else {
				animItem.classList.remove('_active')
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
		return{ top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}

	animOnScroll();
}

// анимация поворота руки

btnArm.addEventListener('mouseover', armRotate);
btnArm.addEventListener('mouseleave', armRotate);

function armRotate() {
	const arm = document.querySelector('.rotate-arm');
	if (!arm.classList.contains('_rotate')) {
		arm.classList.add('_rotate');
	} else {
		arm.classList.remove('_rotate');
	}
	
}


