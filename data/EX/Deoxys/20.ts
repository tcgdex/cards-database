import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Magcargo",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		219,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Slugma",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Smooth Over",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a card. Shuffle your deck, then put that card on top of your deck. This power can't be used if Magcargo is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Knock Over",
			},
			effect: {
				en: "You may discard any Stadium card in play.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion",
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
