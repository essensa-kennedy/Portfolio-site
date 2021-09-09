const iconMenu = document.querySelector('.menu__icon')
const body = document.querySelector('body')

if (iconMenu) {
	const bodyMenu = document.querySelector('.menu__body')
	iconMenu.addEventListener('click', function (e) {
		body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active')
		bodyMenu.classList.toggle('_active')
	})
	
}
const bottomLine = document.querySelector('#blueGroup > #bottomLine')
const middleLine = document.querySelector('#blueGroup > #middleLine')
const topLine = document.querySelector('#blueGroup > #topLine')
const bigLine = document.querySelector('#blueGroup > #bigLine')
const orangeRectangle = document.querySelector('#orangeGroup > #rectangle')
const grifPencil = document.querySelector('#pencil > #grifPencil')
const topPencil = document.querySelector('#pencil > #topPencil')
const pencil_2 = document.querySelector('#pencil > #pencil_2')

const openTag = document.querySelector('#openTag > #Vector_2')
const slash = document.querySelector('#slash > #Vector_3')
const closeTag = document.querySelector('#closeTag > #Vector_4')

const leftComa = document.querySelector('#Comas > #leftComa')
const centerComa = document.querySelector('#Comas > #centerComa')
const rightComa = document.querySelector('#Comas > #rightComa')
const leftBracket = document.querySelector('#left > #b3')
const rightBracket = document.querySelector('#right > #b1')


async function forwardAnimate () {
	leftBracket.setAttribute('fill', '#F7523B')
	rightBracket.setAttribute('fill', '#F7523B')
	leftComa.setAttribute('fill', '#0C0D20')
	rightComa.setAttribute('fill', '#0C0D20')

	bottomLine.setAttribute('d', 'M43 44H26V46H43V44Z')
	middleLine.setAttribute('d', 'M43 38H26V40H43V38Z')
	topLine.setAttribute('d', 'M43 32H26V34H43V32Z')
	bigLine.setAttribute('d', 'M55 19H9V28H55V19Z')	
	orangeRectangle.setAttribute('fill', '#F7523B')
	grifPencil.setAttribute('d', 'M44.3532 36.5335L44.0925 36.9283L41.0702 41.8492L46.843 41.6923L47.3152 41.6639L44.3532 36.5335Z')
	topPencil.setAttribute('d', 'M78.4794 27.0915L81.0446 25.6105C81.9608 25.0816 82.2706 23.9255 81.7416 23.0093L77.7217 16.0466C77.1928 15.1305 76.0367 14.8207 75.1205 15.3496L72.5553 16.8307L78.4794 27.0915Z')
	pencil_2.setAttribute('d', 'M71.4559 17.4655L71.2727 17.5713L49.8736 29.8039C48.9575 30.3329 48.609 31.6335 49.1379 32.5496L49.2437 32.7328C49.6669 33.4657 50.3507 33.8038 51.1507 33.7084C50.8126 34.3922 50.7634 35.1535 51.0421 35.8477L51.1479 36.0309C51.571 36.7638 52.2548 37.1019 53.0548 37.0065C52.7167 37.6903 52.5231 38.4129 52.9463 39.1458L53.0521 39.329C53.581 40.2452 54.8816 40.5937 55.7977 40.0647L77.0523 27.7934L77.2355 27.6877L71.4559 17.4655Z')
	let a = await setTimeout(() => {
		slash.setAttribute('fill', '#F7523B')
		centerComa.setAttribute('fill', '#F7523B')
	},1200)
	closeTag.setAttribute('fill', '#F7523B')

}

async function reverseAnimate () {
		bottomLine.setAttribute('d', 'M27 44H26V46H27V44Z')
		middleLine.setAttribute('d', 'M27 38H26V40H27V38Z')
		topLine.setAttribute('d', 'M27 32H26V34H27V32Z')
		bigLine.setAttribute('d', 'M10 19H9V28H10V19Z')	
		orangeRectangle.setAttribute('fill', '#0C0D20')
		grifPencil.setAttribute('d', 'M50.118 41.1417L49.9684 41.5905L48.3228 47.126L53.8582 45.4803L54.307 45.3307L50.118 41.1417Z')
		topPencil.setAttribute('d', 'M80.6377 23.189L82.7321 21.0945C83.4802 20.3465 83.4802 19.1496 82.7321 18.4016L77.0471 12.7165C76.2991 11.9685 75.1022 11.9685 74.3542 12.7165L72.2597 14.8111L80.6377 23.189Z')
		pencil_2.setAttribute('d', 'M71.3621 15.7087L71.2125 15.8584L53.7086 33.2127C52.9606 33.9607 52.9606 35.3072 53.7086 36.0552L53.8582 36.2048C54.4566 36.8032 55.2047 36.9528 55.9527 36.6536C55.8031 37.4016 55.9527 38.1497 56.4015 38.7481L56.5511 38.8977C57.1495 39.4961 57.8976 39.6457 58.6456 39.3465C58.496 40.0945 58.496 40.8426 59.0944 41.441L59.2441 41.5906C59.9921 42.3386 61.3385 42.3386 62.0866 41.5906L79.4409 24.2363L79.5905 24.0867L71.3621 15.7087Z')
		slash.setAttribute('fill', '#FFF')
	

		closeTag.setAttribute('fill', '#FFF')


		centerComa.setAttribute('fill', '#FFF')
		leftBracket.setAttribute('fill', '#FFF')
		rightBracket.setAttribute('fill', '#FFF')
		leftComa.setAttribute('fill', '#FFF')
		rightComa.setAttribute('fill', '#FFF')
	}
	

	
async function animateDesignIcon () {

	//запускаем анимацию

	let start = await forwardAnimate()
	await new Promise ((resolve) => setTimeout((resolve),1700))
	let finish = await reverseAnimate()

}

setInterval(() => animateDesignIcon(),2700)

$(function () {

	$(window).scroll(function () {

		if ($(this).scrollTop() >= 800) {

			$('#toTop').fadeIn();

		} else {

			$('#toTop').fadeOut();

		}

	});

	$('#toTop').click(function () {

		$('body,html').animate({ scrollTop: 0 }, 800);

	});

});

const moreButton = document.querySelector('#more-btn')
let isOpened = false

moreButton.addEventListener('click', () => {
	if (!isOpened) {
		isOpened = true
		const arrayOfProjects = document.querySelectorAll('.extra')
		console.log(arrayOfProjects)
		for (item of arrayOfProjects) {
		item.classList.remove('_invisible')
		moreButton.classList.add('_up')
		moreButton.innerHTML = 'HIDE'
		}
	} else {
		isOpened = false
		const arrayOfProjects = document.querySelectorAll('.extra')
		console.log(arrayOfProjects)
		for (item of arrayOfProjects) {
		item.classList.add('_invisible')
		moreButton.classList.remove('_up')
		moreButton.innerHTML = 'SHOW MORE (6 PROJECTS)'
		}
	}
})

