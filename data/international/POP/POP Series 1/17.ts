import { Card } from 'models/database/card'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		'en-us': "Tyranitar ex",
		'fr-fr': "Tyranocif ex"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [248],

	hp: 150,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Critical Crush",
				'fr-fr': "Écrasement sévère"
			},
			effect: {
				'en-us': "Discard 2 Basic Energy cards attached to Tyranitar ex or this attack does nothing.",
				'fr-fr': "Défaussez 2 cartes Énergie de base attachées à Tyranocif ex ou cette attaque est sans effet."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass"
		},
		{
			type: "Fighting"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	suffix: "EX",
	retreat: 4,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 97807,
				cardmarket: 277431
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90124,
				cardmarket: 277431
			},
		},
	],

}

export default card
