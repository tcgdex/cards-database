import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Golem",
		'de-de': "Geowaz"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [76],
	
	hp: 140,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Graveler"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Lunge Out",
				'de-de': "Sprungangriff"
			},

			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tumble Down",
				'de-de': "Hinabstürzen"
			},
			effect: {
				'en-us': "Discard as many Fighting Energy cards as you like from your hand. The attack does 30 damage times the number of Fighting Energy cards you discarded.",
				'de-de': "Lege beliebig viele -Energiekarten von deiner Hand auf den Ablagestapel. Dieser Angriff fügt für jede auf dieser Weise auf den Ablagestapel gelegte -Energiekarte 30 Schadenspunkte zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Tumble",
				'de-de': "Rollende Felsen"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'de-de': "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85829,
				cardmarket: 278891
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278891,
				tcgplayer: 85829
			}
		},
	],

}

export default card
