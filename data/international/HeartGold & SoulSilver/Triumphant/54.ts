import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Yanmega",
		'fr-fr': "Yanmega",
		'de-de': "Yanmega"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [469],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Yanma",
		'fr-fr': "Yanma"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Shoot Through",
				'fr-fr': "Passer à travers",
				'de-de': "Durchschießen"
			},
			effect: {
				'en-us': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "U-turn",
				'fr-fr': "Demi-Tour",
				'de-de': "Kehrtwende"
			},
			effect: {
				'en-us': "Switch Yanmega with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Yanmega avec l’un de vos Pokémon de Banc.",
				'de-de': "Tausche Yanmega gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 50,

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The beat of its wings is so powerful that it accidentally dislodges full-grown trees when it takes off in flight."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90693,
				cardmarket: 279584
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279584,
				tcgplayer: 90693
			}
		},
	],

}

export default card
