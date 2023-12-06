import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Ampharos",
		de: "Ampharos"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 120,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Flaaffy",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Acceleration Bolt",
				de: "Beschleunigungsblitz"
			},
			effect: {
				en: "Search your deck for up to 2 basic Energy cards and attach them to 1 of your Pokémon. Shuffle your deck afterward.",
				de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder",
				de: "Donner"
			},
			effect: {
				en: "Flip a coin. If tails, Ampharos does 20 damage to itself.",
				de: "Wirf eine Münze. Bei \"Zahl\" fügt Ampharos sich selbst 20 Schadenspunkte zu."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
