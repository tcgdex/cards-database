import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Horsea",
		fr: "Machopeur",
		de: "Maschock"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [116],

	hp: 50,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Machop",
		fr: "Machoc"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reverse Thrust",
				fr: "Koud'poing",
				de: "Hieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Mega Kick",
				fr: "Ultimawashi",
				de: "Megakick"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86977,
				cardmarket: 274960
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
