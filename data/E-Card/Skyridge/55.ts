import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Farfetch'd",
		de: "Porenta"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		83,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				de: "Wirbelwind"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				de: "Dein Gegner tauscht das verteidigende Pokémon mit 1 der Pokémon auf seiner Bank aus."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leek Rush",
				de: "Lauchhieb"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
				de: "Wirf eine Münze, bis du \"Zahl\" wirfst. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

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

	thirdParty: {
		cardmarket: 275313
	}
}

export default card
