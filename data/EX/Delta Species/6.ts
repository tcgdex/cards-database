import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Gardevoir δ",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 100,
	types: [
		"Psychic",
		"Metal",
	],
	evolveFrom: {
		en: "Kirlia",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Jump",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move an Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Gardevoir is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Psychic Rage",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each damage counter on Gardevoir to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Black Magic",
			},
			effect: {
				en: "Does 10 damage plus 20 more damage times the number of your opponent's Benched Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
