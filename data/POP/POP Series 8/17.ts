import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Turtwig",
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
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Razor Leaf",
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
		en: "Made from soil, the shell on its back hardens when it drinks water. It lives along lakes."
	},

	retreat: 2,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278418
	}
}

export default card
