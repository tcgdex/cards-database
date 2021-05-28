import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Kabutops",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		141,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Kabuto",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
			},
			effect: {
				en: "Whenever you attach a Water, Lightning, or Fighting basic Energy card from your hand to Kabutops, Kabutop's type (color) becomes the same as that type of energy until the end of the turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Draining Cut",
			},
			effect: {
				en: "Remove a damage counter from Kabutops.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Triple Cutter",
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
