import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Kabuto",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		140,
	],
	hp: 60,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Mysterious Fossil",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Exoskeleton",
			},
			effect: {
				en: "Any damage done to Kabuto by attacks is reduced by 20 (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Team Assembly",
			},
			effect: {
				en: "Search your deck for Omanyte, Kabuto, or any Basic Pokémon and put as many of them as you like onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as Basic Pokémon.",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Pierce",
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
