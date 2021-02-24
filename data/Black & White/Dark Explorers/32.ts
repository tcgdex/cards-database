import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Palpitoad",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		536,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Tympole",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Bubble Beam",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
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





}

export default card
