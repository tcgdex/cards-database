import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Ludicolo δ",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		272,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Lombre",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Overzealous",
			},
			effect: {
				en: "If your opponent has any Pokémon-ex in play, each of Ludicolo's attacks does 30 more damage to the Defending Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Knock Off",
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking and discard it.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Punch",
			},

			damage: 60,

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
