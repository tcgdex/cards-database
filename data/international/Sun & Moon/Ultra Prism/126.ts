import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Looker",
		'fr-fr': "Beladonis",
		'es-es': "Handsome",
		'it-it': "Bellocchio",
		'pt-br': "Looker",
		'de-de': "LeBelle"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez 3 cartes du dessous de votre deck.",
		'en-us': "Draw 3 cards from the bottom of your deck.",
		'es-es': "Roba 3 cartas de la parte inferior de tu baraja.",
		'it-it': "Pesca tre carte in fondo al tuo mazzo.",
		'pt-br': "Compre as 3 últimas cartas do seu baralho.",
		'de-de': "Ziehe 3 Karten von unten aus deinem Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 316051,
		tcgplayer: 157743
	}
}

export default card
