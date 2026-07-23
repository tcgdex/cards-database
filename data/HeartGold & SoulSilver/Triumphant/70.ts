import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Nidoran ♂",
		fr: "Nidoran♂",
		de: "Nidoran m"
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
				en: "Pheromone Poison",
				fr: "Poison de phéromones",
				de: "Giftpheromone"
			},
			effect: {
				en: "If Nidoran ♀ is on your Bench, the Defending Pokémon is now Poisoned.",
				fr: "Si Nidoran♀ est sur votre Banc, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wenn sich Nidoran♀ auf deiner Bank befindet, ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Attack",
				fr: "Koud’korne",
				de: "Hornattacke"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	description: {
		en: "It raises its big ears to check its surroundings. It will strike first if it senses any danger."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87729,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87729,
			},
		},
	],

}

export default card
