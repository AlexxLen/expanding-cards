const parentContainer = document.querySelector('.container'),
	panels = document.querySelectorAll('.panel');

parentContainer.addEventListener('click', event => {
	if (event.target && event.target.matches('.panel')) {
		removeActiveClasses();
		event.target.classList.add('active');
	}
});

function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active');
	});
}
