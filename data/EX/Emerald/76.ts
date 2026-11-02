import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Double Full Heal",
		fr: "Double guérison totale",
		de: "Doppel Hyperheiler"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Remove all Special Conditions from each of your Active Pokémon.",
		fr: "Retirez à chacun de vos Pokémon Actifs tous leurs États Spéciaux.",
		de: "Remove all Special Conditions from each of your Pokémon."
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
