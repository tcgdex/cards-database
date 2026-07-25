import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Water Energy",
		fr: "Énergie Eau",
		de: "Wasserenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 275754,
		tcgplayer: 90506
	},

	variants: [		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90506
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90506
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
			stamp: ["reed-weichler"],
			thirdParty: {
				tcgplayer: 00000
			}
		}
	],
	types: [
		"Water"
	],
	retreat: 0
}

export default card
