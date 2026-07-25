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


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275754,
				tcgplayer: 90506
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275754,
				tcgplayer: 90506
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125125
			}
		},
		{
			type: "normal",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 176636
			}
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"],
			thirdParty: {
				tcgplayer: 477979
			}
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"],
			thirdParty: {
				tcgplayer: 477980
			}
		},
		{
			type: "normal",
			stamp: ["reed-weichler"],
			thirdParty: {
				tcgplayer: 477462
			}
		}
	],

	types: [
		"Water"
	],
	retreat: 0
}

export default card
