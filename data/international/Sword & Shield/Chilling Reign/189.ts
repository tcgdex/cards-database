import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Percila",
		'en-us': "Caitlin",
		'es-es': "Catleya",
		'it-it': "Catlina",
		'pt-br': "Caitlin",
		'de-de': "Kattlea"
	},

	illustrator: "En Morikura",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'fr-fr': "Placez le nombre de cartes voulues de votre main en dessous de votre deck dans l'ordre de votre choix. Ensuite, piochez ce même nombre de cartes.",
		'en-us': "Put any number of cards from your hand on the bottom of your deck in any order. Then, draw that many cards.",
		'es-es': "Pon cualquier cantidad de cartas de tu mano en la parte inferior de tu baraja en el orden que quieras. Después, roba esa misma cantidad de cartas.",
		'it-it': "Prendi un numero qualsiasi di carte dalla tua mano e mettile in fondo al tuo mazzo nell'ordine che preferisci. Poi pesca lo stesso numero di carte.",
		'pt-br': "Coloque qualquer número de cartas da sua mão como as cartas de baixo do seu baralho em qualquer ordem. Em seguida, compre aquele mesmo número de cartas.",
		'de-de': "Lege beliebig viele Karten aus deiner Hand in beliebiger Reihenfolge unter dein Deck. Ziehe anschließend genauso viele Karten."
	},

	trainerType: "Supporter",
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567297,
				tcgplayer: 241821
			}
		},
	],
}

export default card
