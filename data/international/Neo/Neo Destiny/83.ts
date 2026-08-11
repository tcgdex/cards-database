import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin",
		'de-de': "Sonnkern"
	},

	illustrator: "Etsuya Hattori",
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
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Walzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Sunbathe",
				'fr-fr': "Bain de soleil",
				'de-de': "Sonnenbad"
			},
			effect: {
				'en-us': "Flip a coin. If heads, remove all damage counters from Sunkern. Search your deck for a card that evolves from Sunkern and attach that card to Sunkern. This counts as evolving Sunkern. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, retirez tous les marqueurs de dégâts sur Tournegrin. Cherchez dans votre deck une carte Évolution de Tournegrin et attachez-la à Tournegrin. Cela équivaut à faire évoluer Tournegin. Mélangez ensuite votre deck.",
				'de-de': "Wirf eine Münze. Entferne bei 'Kopf' alle Schadensmarken von Sonnkern. Durchsuche dein Deck nach einer Karte die aus Sonnkern entsteht und lege diese an Sonnkern an. Dies zählt als Entwickeln von Sonnkern. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It is very small and powerless. If attacked, the best it can do is flap its leaves in an attempt to frighten away its enemies.",
		'fr-fr': "Il est tout petit et sans défense. S'il est attaqué, il agite ses feuilles en espérant effrayer ses ennemis."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274735,
				tcgplayer: 89618
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274735,
				tcgplayer: 89618
			}
		}
	]
}

export default card
