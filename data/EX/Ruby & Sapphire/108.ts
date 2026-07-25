import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Fire Energy",
		fr: "Énergie Feu",
		de: "Feuerenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 275756,
		tcgplayer: 85458
	},

	variants: [		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85458
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85458
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
		}
	],
	types: [
		"Fire"
	],
	retreat: 0
}

export default card
