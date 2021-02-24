import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Kingdra δ",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 110,
	types: [
		"Fire",
		"Metal",
	],
	evolveFrom: {
		en: "Seadra",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dragon Curse",
			},
			effect: {
				en: "Once during your turn (before your attack), if Kingdra is your Active Pokémon, you may put 2 damage counters on 1 of your opponent's Pokémon with δ on its card. This power can't be used if Kingdra is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Extra Flame",
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 30 more damage.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
