import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Sophocles",
		'fr-fr': "Chrys",
		'es-es': "Chris",
		'it-it': "Chrys",
		'pt-br': "Chris",
		'de-de': "Chrys"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Défaussez 2 cartes de votre main. Dans ce cas, piochez 4 cartes.",
		'en-us': "Discard 2 cards from your hand. If you do, draw 4 cards.",
		'es-es': "Descarta 2 cartas de tu mano. Si lo haces, roba 4 cartas.",
		'it-it': "Scarta due delle carte che hai in mano. Se lo fai, pesca quattro carte.",
		'pt-br': "Descarte 2 cartas da sua mão. Se fizer isto, compre 4 cartas.",
		'de-de': "Lege 2 Karten aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 4 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 302202,
		tcgplayer: 146732
	}
}

export default card
