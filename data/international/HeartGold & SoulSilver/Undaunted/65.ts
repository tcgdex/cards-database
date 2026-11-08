import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Scyther",
		'fr-fr': "Insecateur",
		'de-de': "Sichlor"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [123],

	hp: 70,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cut",
				'fr-fr': "Coupe",
				'de-de': "Zerschneider"
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
				'en-us': "Slashing Strike",
				'fr-fr': "Coup déchirant",
				'de-de': "Schlitzender Schlag"
			},
			effect: {
				'en-us': "During your next turn, Scyther can't use Slashing Strike.",
				'fr-fr': "Insécateur ne peut pas utiliser son Coup déchirant pendant votre prochain tour.",
				'de-de': "Sichlor kann Schlitzender Schlag in deinem nächsten Zug nicht einsetzen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It slashes through grass with its sharp scythes, moving too fast for the human eye to track."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279318,
				tcgplayer: 89004
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279318,
				tcgplayer: 89004
			}
		}
	],

}

export default card
