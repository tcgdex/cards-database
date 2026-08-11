import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Double Full Heal",
		'fr-fr': "Double guérison totale",
		'de-de': "Doppel Hyperheiler"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Remove all Special Conditions from each of your Active Pokémon.",
		'fr-fr': "Retirez à chacun de vos Pokémon Actifs tous leurs États Spéciaux.",
		'de-de': "Alle Speziellen Zustände auf allen deinen Aktiven Pokémon verlieren ihre Wirkung."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 277604,
		tcgplayer: 84890
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
