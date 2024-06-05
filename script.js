const navLinks = document.querySelector('.nav-links');

const showNav = e => {
	let clickedTag;

	e.target.classList.contains('nav')
		? (clickedTag = e.target)
		: e.target.parentElement.classList.contains('nav')
		? (clickedTag = e.target.parentElement)
		: (clickedTag = e.target.parentElement.parentElement);

	clickedTag.classList.toggle('show-nav');
};

document.querySelector('.nav').onclick = showNav;
