import { Card } from 'models/database/card'
import Set from '../Emerald'

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
		'de-de': "Remove all Special Conditions from each of your Pokémon."
	},

	thirdParty: {
		tcgplayer: 84888,
		cardmarket: 276587
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84888,
				cardmarket: 276587
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 84888,
				cardmarket: 276587
			},
		}
	],
}

export default card
