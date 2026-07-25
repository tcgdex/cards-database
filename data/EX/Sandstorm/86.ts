import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

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
		fr: "Retirez à chacun de vos Pokémon Actifs ses États Spéciaux.",
		de: "Alle speziellen Zuständen auf allen deinen Aktiven Pokémon verlieren ihre Wirkung."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275863,
				tcgplayer: 84887
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275863,
				tcgplayer: 84887
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125128
			}
		},
	],

	retreat: 0
}

export default card
