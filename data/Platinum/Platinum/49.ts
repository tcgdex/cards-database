import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Grotle",
		fr: "Boskara",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		388,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Turtwig",
		fr: "Tortipouss",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Absorb",
				fr: "Vol-vie",
			},
			effect: {
				en: "Remove 1 damage counter from Grotle.",
				fr: "Retirez à Boskara 1 marqueur de dégât.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'herbe",
			},

			damage: 60,

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
	retreat: 3,



}

export default card
