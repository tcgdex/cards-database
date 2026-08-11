import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin",
		'de-de': "Sonnkern"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		191,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sun Soak",
				'fr-fr': "Trempe-soleil",
				'de-de': "Sonne tanken"
			},
			effect: {
				'en-us': "Flip a coin. If heads, remove all damage counters from Sunkern, search your deck for an Evolution card that evolves from Sunkern, and put it onto Sunkern. (This counts as evolving Sunkern.) Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, retirez à Tournegrin tous ses marqueurs de dégât, cherchez dans votre deck une carte Évolution qui évolue de Tournegrin et placez-la sur Tournegrin. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" entferne alle Schadensmarken von Sonnkern, durchsuche dein Deck nach einer Evoloutionskarte, die sich aus Sonnkern entwickelt, und lege sie auf Sonnkern. (Das zählt als Entwickeln von Sonnkern.) Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Seed Bomb",
				'fr-fr': "Canon Graine",
				'de-de': "Samenbomben"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It suddenly falls out of the sky in the morning. A year after a cold summer, their population explodes.",
	},

	thirdParty: {
		cardmarket: 277867,
		tcgplayer: 89621
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
