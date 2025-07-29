import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Starly",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		396,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gust",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		en: "They flock in great numbers. Though small, they flap their wings with great power."
	},

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277901
	}
}

export default card
