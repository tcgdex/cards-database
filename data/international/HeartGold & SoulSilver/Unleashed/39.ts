import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'de-de': "Pupitar"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [247],

	hp: 80,

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
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncer",
				'de-de': "Einhämmern"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Speed Attack",
				'fr-fr': "Attaque rapide",
				'de-de': "Tempoangriff"
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

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Even sealed in its shell, it can move freely. Hard and fast, it has outstanding destructive power."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88454,
				cardmarket: 279195
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88454,
				cardmarket: 279195
			}
		},
	],

}

export default card
