import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Sunflora",
		'de-de': "Sonnflora"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [192],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Sunkern",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Energy Plant",
				'de-de': "Energiepflanze"
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'de-de': "Durchsuche dein Deck nach einer Basis-Energiekarte und lege sie an 1 deiner Pokémon an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Trip Over",
				'de-de': "Beinstellen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 30 more damage.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

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
			type: "Water",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89613,
				cardmarket: 275363
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89613,
				cardmarket: 275363
			},
		},
	],
}

export default card
