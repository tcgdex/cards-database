import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Forretress",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		205,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Pineco",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Armor Up",
			},
			effect: {
				en: "Until the end of your next turn, if Dark Forretress would be Knocked Out by damage from an attack, flip a coin. If heads, Dark Forretress is not Knocked Out and its remaining HP become 10 instead.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Explosion",
			},
			effect: {
				en: "Dark Forretress does 60 damage to itself.",
			},
			damage: 60,

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
