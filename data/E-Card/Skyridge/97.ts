import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Skarmory",
		de: "Panzaeron"
	},

	illustrator: "Katsura Tabata",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [227],

	hp: 60,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Peck",
				de: "Doppelschnabel"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Head",
				de: "Wirbelkopf"
			},
			effect: {
				en: "Flip a coin. If heads, switch Skarmory with 1 of your Benched Pokémon.",
				de: "Wirf eine Münze. Tausche bei \"Kopf\" Panzaeron mit 1 Pokémon auf deiner Bank aus."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89236,
				cardmarket: 275355
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89236,
				cardmarket: 275355
			},
		},
	],
}

export default card
