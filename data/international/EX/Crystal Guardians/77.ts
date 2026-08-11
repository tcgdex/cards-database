import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

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
	trainerType: "Item",

	effect: {
		'en-us': "Remove all Special Conditions from each of your Active Pokémon.",
		'fr-fr': "Retirez à chacun de vos Pokémon Actifs tous leurs États Spéciaux.",
		'de-de': "Alle Speziellen Zustände auf allen deinen Aktiven Pokémon verlieren ihre Wirkung."
	},

	thirdParty: {
		cardmarket: 277158,
		tcgplayer: 84889
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
