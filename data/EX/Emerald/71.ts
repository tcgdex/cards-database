import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		de: "Voltobal"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				de: "Ram"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Ball",
				fr: "Balle rapide",
				de: "Speed Ball"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276582,
		tcgplayer: 90416
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90416,
				cardmarket: 276582
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 90416,
				cardmarket: 276582
			},
		}
	],
}

export default card
