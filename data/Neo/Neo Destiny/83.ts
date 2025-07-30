import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Sunkern",
		fr: "Tournegrin",
		de: "Sonnkern"
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
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sunbathe",
				fr: "Bain de soleil",
				de: "Sonnenbad"
			},
			effect: {
				en: "Flip a coin. If heads, remove all damage counters from Sunkern. Search your deck for a card that evolves from Sunkern and attach that card to Sunkern. This counts as evolving Sunkern. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, retirez tous les marqueurs de dégâts sur Tournegrin. Cherchez dans votre deck une carte Évolution de Tournegrin et attachez-la à Tournegrin. Cela équivaut à faire évoluer Tournegin. Mélangez ensuite votre deck.",
				de: "Wirf eine Münze. Entferne bei 'Kopf' alle Schadensmarken von Sonnkern. Durchsuche dein Deck nach einer Karte die aus Sonnkern entsteht und lege diese an Sonnkern an. Dies zählt als Entwickeln von Sonnkern. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Il est tout petit et sans défense. S'il est attaqué, il agite ses feuilles en espérant effrayer ses ennemis."
	},

	thirdParty: {
		cardmarket: 274735,
		tcgplayer: 89618
	}
}

export default card
