import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Typhlosion",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		157,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Quilava",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Claw Swipe",
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Rushing Flames",
			},
			effect: {
				en: "You may discard any number of Energy cards attached to your Pokémon. Flip a coin for each Energy card discarded in this way. This attack does 40 damage times the number of heads.",
			},
			damage: 40,

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
