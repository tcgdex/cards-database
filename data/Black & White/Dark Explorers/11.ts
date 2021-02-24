import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Accelgor",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		617,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Shelmet",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Hammer In",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Deck and Cover",
			},
			effect: {
				en: "The Defending Pokémon is now Paralyzed and Poisoned. Shuffle this Pokémon and all cards attached to it into your deck.",
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
