import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Octillery",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		224,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Remoraid",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Super Suction Cups",
			},
			effect: {
				en: "As long as Octillery is your Active Pokémon, your opponent's Pokémon can't retreat.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Standing By",
			},
			effect: {
				en: "Discard an Energy card attached to Octillery. During your next turn, Octillery's Pulse Blast attack's base damage is 120.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Pulse Blast",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
