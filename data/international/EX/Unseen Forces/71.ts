import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Remoraid",
		'fr-fr': "Remoraid",
		'de-de': "Remoraid"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		223,
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
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Call for Family"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a Basic Pokémonm and put it onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Splash",
				'fr-fr': "Trempette",
				'de-de': "Splash"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88696,
				cardmarket: 276717
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 88696,
				cardmarket: 276717
			},
		}
	],
}

export default card
