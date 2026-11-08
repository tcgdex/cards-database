import { Card } from 'models/database/card'
import Set from '../Sandstorm'

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
		'fr-fr': "Retirez à chacun de vos Pokémon Actifs ses États Spéciaux.",
		'de-de': "Alle speziellen Zuständen auf allen deinen Aktiven Pokémon verlieren ihre Wirkung."
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
