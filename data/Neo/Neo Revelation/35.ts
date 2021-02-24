import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Parasect",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		47,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Paras",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sleep Pinchers",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
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





}

export default card
