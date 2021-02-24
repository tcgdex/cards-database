import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Dragonite-GX",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		149,
	],
	hp: 250,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Dragonair",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
			},

			damage: 130,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Judgment",
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
			},
			damage: 270,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mach Delivery GX",
			},
			effect: {
				en: "You may discard any number of cards from your hand until you have 9 or fewer. Draw cards until you have 10 cards in your hand. (You can't use more than 1 GX attack in a game.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],





}

export default card
