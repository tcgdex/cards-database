import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Golem",
		'fr-fr': "Grolem",
		'de-de': "Geowaz"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [76],

	hp: 100,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Rock Body",
				'fr-fr': "Corps roc",
				'de-de': "Rock Body"
			},
			effect: {
				'en-us': "All damage done by attacks to Golem is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés par des attaques sur Grolem sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "All damage done by attacks to Golem is reduced by 10 (after applying Weakness and Resistance.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Tumble",
				'fr-fr': "Roule-pierre",
				'de-de': "Rock Tumble"
			},
			effect: {
				'en-us': "Don't apply Resistance.",
				'fr-fr': "N'appliquez pas la Résistance.",
				'de-de': "Don't apply Resistance."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 4,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85824,
				cardmarket: 274889
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85824,
				cardmarket: 274889
			},
		},
	],
}

export default card
