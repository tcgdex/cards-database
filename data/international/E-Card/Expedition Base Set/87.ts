import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
		'de-de': "Safcon"
	},

	illustrator: "Yuichi Sawayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [11],

	hp: 60,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Exoskeleton",
				'fr-fr': "Exosquelette",
				'de-de': "Exoskelett"
			},
			effect: {
				'en-us': "All damage done by attacks to Metapod is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés par des attaques sur Chrysacier sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Aller Schaden, der Safcon von Angriffen zugefügt wird, wird um 20 reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Walzer"
			},

			damage: 10,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
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
			type: "normal",
			thirdParty: {
				tcgplayer: 87388,
				cardmarket: 274962
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87388,
				cardmarket: 274962
			},
		},
	],
}

export default card
