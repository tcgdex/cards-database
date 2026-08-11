import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Fire Crystal",
		'fr-fr': "Cristal Feu",
		'es-es': "Cristal Fuego",
		'it-it': "Cristallo di Fuoco",
		'pt-br': "Cristal de Fogo",
		'de-de': "Feuerkristall"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Put 3 Fire Energy cards from your discard pile into your hand.",
		'fr-fr': "Ajoutez 3 cartes Énergie Fire de votre pile de défausse à votre main.",
		'es-es': "Pon 3 cartas de Energía Fire de tu pila de descartes en tu mano.",
		'it-it': "Prendi tre carte Energia Fire dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		'pt-br': "Coloque 3 cartas de Energia Fire da sua pilha de descarte na sua mão.",
		'de-de': "Nimm 3 Fire-Energiekarten aus deinem Ablagestapel auf deine Hand."
	},

	thirdParty: {
		cardmarket: 372731,
		tcgplayer: 189275
	}
}

export default card
