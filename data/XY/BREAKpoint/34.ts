import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Palpitoad",
		fr: "Batracné",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		536,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Tympole",
		fr: "Tritonde",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Frog Hop",
				fr: "Bond de Grenouille",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Mud Shot",
				fr: "Tir de Boue",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
