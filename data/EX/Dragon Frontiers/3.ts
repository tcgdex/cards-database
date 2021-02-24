import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Heracross δ",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		214,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Shining Horn",
			},
			effect: {
				en: "As long as Heracross is the only Pokémon you have in play, your opponent's Basic Pokémon can't attack.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dig Deep",
			},
			effect: {
				en: "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Extra Claws",
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 20 more damage.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
