import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'de-de': "Schneppke"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		361,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
				'de-de': "Beat"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 89400,
		cardmarket: 276575
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89400,
				cardmarket: 276575
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89400,
				cardmarket: 276575
			},
		}
	],
}

export default card
