import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Marowak δ",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 80,
	types: [
		"Fightning",
		"Metal",
	],
	evolveFrom: {
		en: "Cubone",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Metal",
			],
			name: {
				en: "Energy Bone",
			},
			effect: {
				en: "Choose a number of your opponent's Pokémon up to the amount of Energy attached to Marowak. This attack does 20 damage to each of them.",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Crusher",
			},
			effect: {
				en: "If the Defending Pokémon is Metal Pokémon, this attack's base damage is 90.",
			},
			damage: 50,

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
