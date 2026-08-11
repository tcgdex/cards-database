import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepic",
		'de-de': "Tannza"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [204],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Exoskeleton",
				'fr-fr': "Exosquelette",
				'de-de': "Exoskelett"
			},
			effect: {
				'en-us': "Any damage done to Pineco by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Tous dégâts infligés à Pomdepic par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Jeder Schaden, der Tannza durch Angriffe zugefügt wird, wird um 10 reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88126,
				cardmarket: 275948
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88126,
				cardmarket: 275948
			},
		},
	],

}

export default card
