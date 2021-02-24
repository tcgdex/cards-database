import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Teddiursa",
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		216,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rest",
			},
			effect: {
				en: "Remove all Special Conditions and 2 damage counters from Teddiursa. Teddiursa is now Asleep.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sweet Palm",
			},
			effect: {
				en: "Before doing damage, remove 1 damage counter from the Defending Pokémon.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],





}

export default card
