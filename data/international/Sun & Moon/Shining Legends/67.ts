import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Switch",
		'fr-fr': "Échange",
		'es-es': "Cambio",
		'it-it': "Scambio",
		'pt-br': "Substituição",
		'de-de': "Tausch"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Échangez votre Pokémon Actif avec l'un de vos Pokémon de Banc.",
		'en-us': "",
		'es-es': "",
		'it-it': "",
		'pt-br': "",
		'de-de': ""
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 302204,
		tcgplayer: 146726
	}
}

export default card
