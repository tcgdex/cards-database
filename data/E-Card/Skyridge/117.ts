import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Zubat",
		de: "Zubat"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		41,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sound Waves",
				de: "Schallwellen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Flitter",
				de: "Huschen"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 10 Schadenspunkte zu. Wende keine Schwäche oder Resistenz an. ( Alle anderen Auswirkungen von Angriffen, die nach der Anwendung von Schwäche und Resistenz stattfinden, finden immer noch statt."
			}

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
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
