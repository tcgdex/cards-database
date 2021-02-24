import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Typhlosion δ",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		157,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Quilava",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Shady Move",
			},
			effect: {
				en: "Once during your turn (before your attack), if Typhlosion is your Active Pokémon, you may move 1 damage counter from either player's Pokémon to another Pokémon (yours or your opponent's). This power can't be used if Typhlosion is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burning Ball",
			},
			effect: {
				en: "If Typhlosion has at least 2 Fire Energy attached to it, the Defending Pokémon is now Burned.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
