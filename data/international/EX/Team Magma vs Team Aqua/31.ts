import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Sealeo",
		'fr-fr': "Phogleur de Team Aqua",
		'de-de': "Team Aquas Seejong"
	},

	illustrator: "T. Honda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [364],

	hp: 80,

	types: [
		"Water"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aurora Beam",
				'fr-fr': "Onde boréale",
				'de-de': "Aurora Beam"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Knock Over",
				'fr-fr': "Culbute",
				'de-de': "Knock Over"
			},
			effect: {
				'en-us': "You may discard any Stadium card in play.",
				'fr-fr': "Vous pouvez défausser n'importe quelle carte Stade en jeu.",
				'de-de': "You may discard any Stadium card in play."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275808,
				tcgplayer: 89797
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275808,
				tcgplayer: 89797
			}
		},
	],

}

export default card
