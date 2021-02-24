import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Grovyle",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		253,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Treecko",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Detect",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Grovyle during your opponent's next turn.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Smash Kick",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],




}

export default card
