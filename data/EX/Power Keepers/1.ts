import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Aggron",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		306,
	],
	hp: 110,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Lairon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Terraforming",
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 5 cards from your deck and put them back on top of your deck in any order. This power can't be used if Aggron is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Claw",
			},

			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mix-Up",
			},
			effect: {
				en: "Your opponent discards the top card of his or her deck.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
