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


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275753,
				tcgplayer: 85438
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275753,
				tcgplayer: 85438
			}
		},
		{
			type: "normal",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 176625
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125151
			}
		},
		{
			type: "normal",
			stamp: ["miska-saari"],
			thirdParty: {
				tcgplayer: 477616
			}
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"],
			thirdParty: {
				tcgplayer: 477383
			}
		}
	],

	types: [
		"Fighting"
	],
	retreat: 0
}

export default card
