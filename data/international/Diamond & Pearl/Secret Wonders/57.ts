import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino",
		'de-de': "Nidorino"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		33,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidoran?",
		'fr-fr': "Nidoran♂",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spirited Drill",
				'fr-fr': "Perceuse vigoureuse",
				'de-de': "Energischer Bohrer"
			},
			effect: {
				'en-us': "During your next turn, each of Nidorino's attacks does 20 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Lors de votre prochain tour, les attaques de Nidorino infligent 20 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
				'de-de': "In deinem nächsten Zug fügen Nidorinos Angriffe dem Verteidigenden Pokémon 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Horn",
				'fr-fr': "Corne empoisonnée",
				'de-de': "Gifthorn"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has a violent disposition and stabs foes with its horn, which oozes poison upon impact.",
	},

	thirdParty: {
		cardmarket: 277810,
		tcgplayer: 87745
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
