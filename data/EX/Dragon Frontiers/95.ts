import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Latias ex δ",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 100,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fellow Boost",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a basic Energy card from your hand to your Latias, Latias ex, Latios or Latios ex. If you do, your turn ends. This power can't be used if Latias ex is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Power Crush",
			},
			effect: {
				en: "If the Defending Pokémon is Knocked Out by this attack, discard 2 Fire Energy attached to Latias ex.",
			},
			damage: 90,

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
