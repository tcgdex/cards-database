import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Cradily",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		346,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Lileep",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Devolution Wave",
			},
			effect: {
				en: "Count the number of React Energy cards attached to Cradily and choose up to that number of your opponent's Evolved Pokémon. Remove the highest Stage Evolution card from each of those Pokémon, then have your opponent shuffle those cards into his or her deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Linear Attack",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mud Shot",
			},

			damage: 50,

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
