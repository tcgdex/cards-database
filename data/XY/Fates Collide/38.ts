import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Kabuto",
		fr: "Kabuto",
	},
	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		140,
	],
	hp: 80,
	types: [
		"Fighting",
	],

	stage: "RESTORED",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mud Shot",
				fr: "Tir de Boue",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
