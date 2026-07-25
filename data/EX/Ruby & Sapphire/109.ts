import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Lightning Energy",
		fr: "Énergie Électrique",
		de: "Elektroenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 275757,
		tcgplayer: 86761
	},

	variants: [		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86761
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86761
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 00000
			}
		},
		{
			type: "normal",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 00000
			}
		},
		{
			type: "normal",
			stamp: ["chris-fulop"],
			thirdParty: {
				tcgplayer: 00000
			}
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"],
			thirdParty: {
				tcgplayer: 00000
			}
		}
	],
	retreat: 0
}

export default card
