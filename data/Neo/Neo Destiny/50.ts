import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Ninetales",
	},
	illustrator: "Masako Yamashita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Vulpix",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Guiding Flame",
			},
			effect: {
				en: "Put a Baby Pokémon or a Basic Pokémon card from your discard pile onto your Bench. (You can't use this attack if your Bench is full.)",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Blast",
			},
			effect: {
				en: "Discard a Energy card attached to Light Ninetales in order to use this attack.",
			},
			damage: 50,

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
