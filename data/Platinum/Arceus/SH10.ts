import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Bagon",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		371,
	],

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Star Barrier",
			},
			effect: {
				en: "As long as Bagon has any Energy attached to it, Bagon has no Weakness.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dragon Rage",
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
