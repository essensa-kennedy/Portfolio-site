const iconMenu = document.querySelector('.menu__icon')
const body = document.querySelector('body')

if (iconMenu) {
	const bodyMenu = document.querySelector('.menu__body')
	addEventListener('click', function (e) {
		body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active')
		bodyMenu.classList.toggle('_active')

		console.log(iconMenu)
	})
	
}

const icons = document.querySelector('.about__icon')

icons.addEventListener('click', forwardAnimation)

function forwardAnimation () {

	const iconWebDesign = document.querySelector('#webDesign')
	const bottomLine = iconWebDesign.querySelector('#bottomLine')
	const middleLine = iconWebDesign.querySelector('#middleLine')
	const topLine = iconWebDesign.querySelector('#topLine')
	const bigLine = iconWebDesign.querySelector('#bigLine')

	bottomLine.setAttribute('d', 'M43 44H26V46H43V44Z')
	middleLine.setAttribute('d', 'M43 38H26V40H43V38Z')
	topLine.setAttribute('d', 'M43 32H26V34H43V32Z')
	bigLine.setAttribute('d', 'M55 19H9V28H55V19Z')
}

