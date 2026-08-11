import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'de-de': "Pupitar"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [247],

	hp: 70,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Kopfnuss"
			},

			damage: 20,

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
				tcgplayer: 88447,
				cardmarket: 274965
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88447,
				cardmarket: 274965
			},
		},
	],
}

export default card
