import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Machoke",
		'de-de': "Maschock"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [67],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Machop",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Focus Energy",
				'de-de': "Energiefokus"
			},
			effect: {
				'en-us': "During your next turn, Machoke's Mega Punch attack's base damage is 80.",
				'de-de': "Während deines nächsten Zuges beträgt der Basis-Schaden von Maschocks Angriff \"Megahieb\" 80"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Punch",
				'de-de': "Megahieb"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86975,
				cardmarket: 275296
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86975,
				cardmarket: 275296
			},
		},
	],
}

export default card
