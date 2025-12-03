import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Shellos East Sea",
		fr: "Sancoki Mer Orient",
		de: "Schalellos Östliches Meer"
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
				en: "Shell Hunting",
				fr: "Chasse au coquillage",
				de: "Panzersuche"
			},
			effect: {
				en: "Search your deck for up to 2 in any combination of Shellos West Sea and Shellos East Sea and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une combinaison de jusqu'à 2 Sancoki Mer Occident\net Sancoki Mer Orient et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 Karten in beliebiger Kombination aus Schalellos Westliches Meer- und Schalellos Östliches Meer-Karten und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sprinkle Water",
				fr: "Eau aspergeante",
				de: "Wassersprüher"
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
			stamp: [{
				stamp: "origins",
				detail: 2008
			}]
		},
		{
			type: "normal",
			stamp: [{
				stamp: "origins",
				detail: 2008
			}, "staff"]
		}
	]
}

export default card
