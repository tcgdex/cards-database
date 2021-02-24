import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Gardevoir ex δ",
	},
	illustrator: "Masahiko Ishii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 150,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Kirlia",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Imprison",
			},
			effect: {
				en: "Once during your turn (before your attack), if Gardevoir ex is your Active Pokémon, you may put an Imprison marker on 1 of your opponent's Pokémon. Any Pokémon that has any Imprison markers on it can't use any Poké-Powers or Poké-Bodies. This power can't be used if Gardevoir ex is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flame Ball",
			},
			effect: {
				en: "You may move a Fire Energy card attached to Gardevoir ex to 1 of your Benched Pokémon.",
			},
			damage: 80,

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
