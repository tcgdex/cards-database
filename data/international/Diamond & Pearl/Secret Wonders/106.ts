import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Shellos East Sea",
		'fr-fr': "Sancoki Mer Orient",
		'de-de': "Schalellos Östliches Meer"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		422,
	],

	hp: 60,

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
				'en-us': "Shell Hunting",
				'fr-fr': "Chasse au coquillage",
				'de-de': "Panzersuche"
			},
			effect: {
				'en-us': "Search your deck for up to 2 in any combination of Shellos West Sea and Shellos East Sea and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une combinaison de jusqu'à 2 Sancoki Mer Occident\net Sancoki Mer Orient et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Karten in beliebiger Kombination aus Schalellos Westliches Meer- und Schalellos Östliches Meer-Karten und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Sprinkle Water",
				'fr-fr': "Eau aspergeante",
				'de-de': "Wassersprüher"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its colors and shapes differ from region to region. In the Sinnoh region, two types are confirmed.",
	},

	thirdParty: {
		cardmarket: 277859,
		tcgplayer: 89141
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["origins-2008"]
		},
		{
			type: "normal",
			stamp: ["origins-2008","staff"]
		}
	]
}

export default card
