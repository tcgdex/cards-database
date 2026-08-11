import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos Niv. 26",
		'de-de': "Fukano"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [58],

	hp: 70,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stoke",
				'fr-fr': "Crémation",
				'de-de': "Anheizen"
			},
			effect: {
				'en-us': "Search your deck for a Fire Energy card and attach it to Growlithe. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie Fire et attachez-la à Caninos. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 -Energiekarte und lege sie an Fukano an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "Growlithe does 10 damage to itself.",
				'fr-fr': "Caninos s'inflige 10 dégâts.",
				'de-de': "Fukano fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	retreat: 2,

	description: {
		'en-us': "A Pokémon with a loyal nature. It will remain motionless until it is given an order by its Trainer."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278637,
				tcgplayer: 85958
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278637,
				tcgplayer: 85958
			}
		},
	],

}

export default card
