import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Nidoran ♂",
		'fr-fr': "Nidoran♂",
		'de-de': "Nidoran m"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [32],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pheromone Poison",
				'fr-fr': "Poison de phéromones",
				'de-de': "Giftpheromone"
			},
			effect: {
				'en-us': "If Nidoran ♀ is on your Bench, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Si Nidoran♀ est sur votre Banc, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wenn sich Nidoran♀ auf deiner Bank befindet, ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horn Attack",
				'fr-fr': "Koud’korne",
				'de-de': "Hornattacke"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It raises its big ears to check its surroundings. It will strike first if it senses any danger."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87729
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87729
			}
		},
	],

}

export default card
