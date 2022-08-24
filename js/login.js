window.addEventListener('click', function (event) {
	const login = document.querySelector('#formLogin');
	const registration = document.querySelector('#formRegistration');
	const loginBtn = document.querySelector('.login');
	const registrationBtn = document.querySelector('.registration');
	
	if (event.target.dataset.action === 'login') {

		registration.classList.add('hidden');
		login.classList.remove('hidden');

		registrationBtn.classList.remove('border-bottom')
		loginBtn.classList.add('border-bottom');

	} else if (event.target.dataset.action === 'registration') {

		login.classList.add('hidden');
		registration.classList.remove('hidden');

		loginBtn.classList.remove('border-bottom');
		registrationBtn.classList.add('border-bottom');
	}

	if (event.target.dataset.open === 'openLogin') {
		document.querySelector('.modal').classList.remove('hidden');
		
		document.querySelector('body').classList.add('no-scroll');
	}

	if (event.target.dataset.close === 'close') {
		document.querySelector('.modal').classList.add('hidden');

		document.querySelector('body').classList.remove('no-scroll');

		login.classList.remove('hidden');
		registration.classList.add('hidden');
		loginBtn.classList.add('border-bottom');
		registrationBtn.classList.remove('border-bottom');
	}
})
