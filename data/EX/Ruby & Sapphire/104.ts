import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Grass Energy",
		fr: "Énergie Plante",
		de: "Pflanzenenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",


	variants: [		{
			type: "normal",
			thirdParty: {
				cardmarket: 275752,
				tcgplayer: 85874
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275752,
				tcgplayer: 85874
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 215767
			}
		},
		{
			type: "normal",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 176627
			}
		}
	],

	types: [
		"Grass"
	],
	retreat: 0
}

export default card
