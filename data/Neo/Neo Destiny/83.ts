import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Sunkern",
		fr: "Tournegrin"
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
				fr: "Roulade"
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
				fr: "Bain de soleil"
			},
			effect: {
				en: "Flip a coin. If heads, remove all damage counters from Sunkern. Search your deck for a card that evolves from Sunkern and attach that card to Sunkern. This counts as evolving Sunkern. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, retirez tous les marqueurs de dégâts sur Tournegrin. Cherchez dans votre deck une carte Évolution de Tournegrin et attachez-la à Tournegrin. Cela équivaut à faire évoluer Tournegin. Mélangez ensuite votre deck."
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
	}
}

export default card
