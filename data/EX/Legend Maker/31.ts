import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Dunsparce",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		206,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Deadlock",
			},
			effect: {
				en: "As long as Dunsparce is your Active Pokémon, your opponent's Dunsparce can't attack.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Down Draw",
			},
			effect: {
				en: "Draw 2 cards from the bottom of your deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tripping Turn",
			},
			effect: {
				en: "The Defending Pokémon is now Confused. You may switch Dunsparce with 1 of your Benched Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
