import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'de-de': "Rihorn"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [111],

	hp: 60,

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
				'en-us': "Double Stab",
				'fr-fr': "Coup double",
				'de-de': "Double Stab"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10×",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Take Down"
			},
			effect: {
				'en-us': "Rhyhorn does 10 damage to itself.",
				'fr-fr': "Rhinocorne s'inflige 10 dégâts.",
				'de-de': "Rhyhorn does 10 damage to itself."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88740,
				cardmarket: 276144
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88740,
				cardmarket: 276144
			}
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"],
			thirdParty: {
				tcgplayer: 477576,
				cardmarket: 871531
			}
		},
	]
}

export default card
