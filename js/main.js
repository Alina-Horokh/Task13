let button = document.querySelector('#arrow-link')

button.addEventListener('click', (e) => {
	window.scrollTo({
		top: main.offsetTop,
		behavior: 'smooth',
	})
})

