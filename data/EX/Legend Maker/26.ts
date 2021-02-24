import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Spinda",
	},
	illustrator: "Motofumi Fujiwara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		327,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Pattern Distraction",
			},
			effect: {
				en: "As long as Spinda is your Active Pokémon, whenever your opponent's Basic Pokémon tries to attack, your opponent flips a coin. If tails, that attack does nothing. You can't use more than 1 Pattern Distraction Poké-Body each turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Whimsy Draw",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, draw 2 cards.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
			},
			effect: {
				en: "Flip a coin. If tails, Spinda does 10 damage to itself.",
			},
			damage: 30,

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
