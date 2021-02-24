import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Sunflora",
	},
	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		192,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Sunkern",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reflected Sunlight",
			},
			effect: {
				en: "Attach up to 2 Energy cards from your hand to 1 of your Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Solarbeam",
			},

			damage: 40,

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
