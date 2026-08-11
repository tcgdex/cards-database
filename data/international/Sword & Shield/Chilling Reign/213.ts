import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Caitlin",
		'fr-fr': "Percila",
		'es-es': "Catleya",
		'it-it': "Catlina",
		'pt-br': "Caitlin",
		'de-de': "Kattlea"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Put any number of cards from your hand on the bottom of your deck in any order. Then, draw that many cards.",
		'fr-fr': "Placez le nombre de cartes voulues de votre main en dessous de votre deck dans l'ordre de votre choix. Ensuite, piochez ce même nombre de cartes.",
		'es-es': "Pon cualquier cantidad de cartas de tu mano en la parte inferior de tu baraja en el orden que quieras. Después, roba esa misma cantidad de cartas.",
		'it-it': "Prendi un numero qualsiasi di carte dalla tua mano e mettile in fondo al tuo mazzo nell'ordine che preferisci. Poi pesca lo stesso numero di carte.",
		'pt-br': "Coloque qualquer número de cartas da sua mão como as cartas de baixo do seu baralho em qualquer ordem. Em seguida, compre aquele mesmo número de cartas.",
		'de-de': "Lege beliebig viele Karten aus deiner Hand in beliebiger Reihenfolge unter dein Deck. Ziehe anschließend genauso viele Karten."
	},

	trainerType: "Supporter",


	illustrator: "En Morikura",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 567321,
				tcgplayer: 241822
			}
		},
	],
}

export default card
