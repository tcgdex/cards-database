import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		de: "Vulpix",
		en: "Vulpix",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Firebreathing",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "As each tail grows, its fur becomes more lustrous. When held, it feels slightly warm.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 281171,
				tcgplayer: 90448
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 281171,
				tcgplayer: 90448
			}
		},
	],
}

export default card
