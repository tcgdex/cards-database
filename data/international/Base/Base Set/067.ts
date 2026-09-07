import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'de-de': "Voltobal",
		'it-it': "Voltorb"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle",
				'it-it': "Azione"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Usually found in power plants. Easily mistaken for a Monster Ball, it has zapped many people.",
		'fr-fr': "Vivant dans les centrales, ce Pokémon survolté est souvent confondu avec une Poké Ball.",
		'it-it': "Si trova generalmente nelle centrali elettriche. Facilmente confondibile per una Poké Ball, ha fulminato molte persone. LIV 10 N.100"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273762,
				tcgplayer: 42412
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107064
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107064
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
