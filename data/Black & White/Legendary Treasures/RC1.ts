import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Snivy",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		495,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Growth",
			},
			effect: {
				en: "Attach a Grass Energy card from your hand to this Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
			},

			damage: 30,

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
