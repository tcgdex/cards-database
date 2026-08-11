import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Plusle",
		'fr-fr': "Posipi",
		'de-de': "Plusle"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
	],

	hp: 60,

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
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Call for Family"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Positive Spark",
				'fr-fr': "Étincelle positive",
				'de-de': "Positive Spark"
			},
			effect: {
				'en-us': "Does 20 damage to each of your opponent's Pokémon that has any Poké-Powers. Don't apply Weakness and Resistance.",
				'fr-fr': "Inflige 20 dégâts à chacun des Pokémon de votre adversaire possédant des Poké-Powers. Vous ne pouvez pas appliquer la Faiblesse et la Résistance.",
				'de-de': "Does 20 damage to each of your opponent's Pokémon that has any Poke-Powers. Don't apply Weakness and resistance."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 88164,
				cardmarket: 276447
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88164,
				cardmarket: 276447
			},
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"],
			thirdParty: {
				tcgplayer: 477892,
				cardmarket: 869526
			},
		},
	],

}

export default card
