import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Forretress",
		'de-de': "Forstellka"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [205],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Pineco",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Exoskeleton",
				'de-de': "Exoskelett"
			},
			effect: {
				'en-us': "All damage done by attacks to Forretress is reduced by 10 (after applying Weakness and Resistance).",
				'de-de': "Jeder Schaden der Frostellka durch Angriff zugefügt wird, wird um 10 reduziert (nachdem Schwäche udn resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Shell Rupture",
				'de-de': "Schalenbruch"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf der gegnerischen Bank 10 Schadenspunkte zu. (Wende keine Schwäche oder Resistenz bei Pokémon auf der Bank an.)"
			}

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Spin",
				'de-de': "Doppeldreher"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage times the number of heads.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85546,
				cardmarket: 275267
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85546,
				cardmarket: 275267
			},
		},
	],
}

export default card
