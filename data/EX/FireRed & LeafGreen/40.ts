import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Nidorina",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		30,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nidoran ♀",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fast Evolution",
			},
			effect: {
				en: "Search your deck for up to 2 Evolution cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
