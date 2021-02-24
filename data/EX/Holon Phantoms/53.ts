import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Sharpedo δ",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		319,
	],
	hp: 70,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Carvanha",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brush Aside",
			},
			effect: {
				en: "If Sharpedo has any Holon Energy cards attached to it, choose 1 card from your opponent's hand without looking and discard it.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swift Turn",
			},
			effect: {
				en: "If the Defending Pokémon has Fighting Resistance, this attack does 50 damage plus 30 more damage.",
			},
			damage: 50,

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
