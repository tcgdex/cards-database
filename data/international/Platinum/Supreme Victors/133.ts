import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'de-de': "Zubat"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [41],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Turn",
				'fr-fr': "Vif retournement",
				'de-de': "Schnelldrehung"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
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
		'en-us': "It checks its surroundings and location using reflections of the ultrasonic waves from its mouth."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90775,
				cardmarket: 278824
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278824,
				tcgplayer: 90775
			}
		},
	],

}

export default card
