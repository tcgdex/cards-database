import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Psychic Energy",
		fr: "Énergie Psy",
		de: "Psychoenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 275755,
		tcgplayer: 88418
	},

	variants: [		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88418
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88418
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
			stamp: ["tsuguyoshi-yamato"],
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
	types: [
		"Psychic"
	],
	retreat: 0
}

export default card
