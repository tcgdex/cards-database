import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Fighting Energy",
		fr: "Énergie Combat",
		de: "Kampfenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 275753,
		tcgplayer: 85438
	},

	variants: [		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85438
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85438
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
		}
	],
	types: [
		"Fighting"
	],
	retreat: 0
}

export default card
