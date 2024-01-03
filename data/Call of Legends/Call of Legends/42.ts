import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Donphan",
		de: "Donphan"
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		232,
	],
	hp: 100,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Phanpy",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Hurl",
				de: "Steinschleuderer"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Spin",
				de: "Doppeldreher"
			},
			effect: {
				en: "Flip 2 coins. This attack does 70 damage times the number of heads.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 70 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "70x",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],




}

export default card
