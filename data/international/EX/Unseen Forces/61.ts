import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
		'de-de': "Larvitar"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		246,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Retaliate",
				'fr-fr': "Représailles",
				'de-de': "Retaliate"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Larvitar.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueur de dégât sur Embrylex.",
				'de-de': "Does 10 damage times the number of damage counters on Larvitar."
			},
			damage: "10x",

		},
		{
			cost: [
				"Colorless",
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
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86640,
				cardmarket: 276707
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86640,
				cardmarket: 276707
			},
		}
	],
}

export default card
