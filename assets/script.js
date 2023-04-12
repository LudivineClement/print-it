const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imageBanner = document.querySelector('.banner-img');
imageBanner.src = 'assets/images/slideshow/'+slides[0].image;
let cpt = 0;
const arrowleft = document.querySelector('.arrow_left')
arrowleft.addEventListener ('click', function () {
	
	if( cpt == 0) {
		cpt = slides.length-1;
		imageBanner.src = 'assets/images/slideshow/'+slides[cpt].image;
	}
	else {
		imageBanner.src = 'assets/images/slideshow/'+slides[cpt--].image;
	}	
	console.log('taille du tableau',slides.length)
	console.log('compteur',cpt)
	console.log('image',slides[cpt].image)
})

const arrowright = document.querySelector('.arrow_right')
arrowright.addEventListener ('click', function () {
	console.log('taille du tableau',slides.length)
	console.log('compteur',cpt)
	console.log('image',slides[cpt].image)

	if( cpt == slides.length) {
		cpt = 0;
		imageBanner.src = 'assets/images/slideshow/'+slides[cpt].image;
	}
	else {
		imageBanner.src = 'assets/images/slideshow/'+slides[cpt++].image;
	}
	
})







