import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Turtwig",
		de: "Chelast"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		387,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Tackle",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Razor Leaf",
				de: "Rasierblatt"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	description: {
		en: "Made from soil, the shell on its back hardens when it drinks water. It lives along lakes.",
		de: "Es besteht aus Erdreich. Trinkt es Wasser, verhärtet sich der Panzer auf seinem Rücken. Es lebt an Seen."
	},

	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278418,
				tcgplayer: 90076
			}
		},
	],
}

export default card
