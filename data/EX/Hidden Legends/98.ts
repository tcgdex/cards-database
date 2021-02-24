import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Regirock ex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		377,
	],
	hp: 100,
	types: [
		"Fightning",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Healing Stone",
			},
			effect: {
				en: "At any time between turns, remove 1 damage counter from Regirock ex.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Tonnage",
			},
			effect: {
				en: "You may do 60 damage plus 20 more damage. If you do, Regirock ex does 30 damage to itself.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
