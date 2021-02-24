import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		32,
	],
	hp: 50,
	types: [
		"Psychic",
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
			},
			effect: {
				en: "If Nidoran♀ is on your Bench, the Defending Pokémon is now Poisoned.",
				fr: "Si Nidoran♀ est sur votre Banc, le Pokémon Défenseur est maintenant Empoisonné.",
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
				fr: "Koud'korne",
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



}

export default card
