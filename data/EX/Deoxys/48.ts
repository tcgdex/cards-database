import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Starmie",
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Staryu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Core Guard",
			},
			effect: {
				en: "As long as Starmie has any Psychic Energy attached to it, damage done to Starmie by attacks is reduced by 10 (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Energy Flip",
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) You may move an Energy attached to that Pokémon to another of your opponent's Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Boom",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
			},
			damage: 10,

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
