import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Grovyle",
	},
	illustrator: "Tomoaki Imakuni",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		253,
	],

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
				en: "Blade Arms",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
