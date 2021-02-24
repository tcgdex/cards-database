import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Aron",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		304,
	],
	hp: 50,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Self Charge",
			},
			effect: {
				en: "Attach a Metal Energy card from your hand to Aron.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Headbutt",
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
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
