import { Card } from '../../../interfaces'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		en: "Pelipper (Delta Species)",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		279,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Wingull",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mist",
			},
			effect: {
				en: "Any damage done to Pelipper by attacks from Stage 2 Evolved Pokémon (both yours and your opponent's) is reduced by 30 (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Wing",
			},
			effect: {
				en: "Does 10 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
