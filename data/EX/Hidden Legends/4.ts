import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Dark Celebi",
	},
	illustrator: "Ken Ikuji",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 70,
	types: [
		"Grass",
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dark Provide",
			},
			effect: {
				en: "Attach up to 1 Grass or Darkness Energy card from your hand to your Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Darkness",
			],
			name: {
				en: "Leaf Poison",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 20,

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
