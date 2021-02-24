import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Kabuto",
	},
	illustrator: "Takao Unno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		140,
	],
	hp: 60,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Mysterious Fossil",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Ancient Protection",
			},
			effect: {
				en: "Each of your Omanyte, Omastar, Kabuto, Kabutops, and Kabutops ex has no Weakness.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Granite Head",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Kabuto by attacks is reduced by 10 (after applying Weakness and Resistance).",
			},
			damage: 20,

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
