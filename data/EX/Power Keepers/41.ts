import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Vigoroth",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		288,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Slakoth",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Strikes Back",
			},
			effect: {
				en: "If Vigoroth is your Active Pokémon and is damaged by an opponent's attack (even if Vigoroth is Knocked Out), put 1 damage counter on the Attacking Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ambush",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
