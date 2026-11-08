import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou",
		'de-de': "Kleinstein"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [74],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Light Punch",
				'fr-fr': "Poing léger",
				'de-de': "Leichter Hieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Pebble Throw",
				'fr-fr': "Jet de caillou",
				'de-de': "Kieselwurf"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez un des Pokémon du Banc de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc).",
				'de-de': "Fügt 1 der Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85687,
				cardmarket: 275932
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85687,
				cardmarket: 275932
			},
		},
	],

}

export default card
