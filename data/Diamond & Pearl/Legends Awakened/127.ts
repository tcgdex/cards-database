import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		70,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bellsprout",
		fr: "Knofensa",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poisonpowder",
				fr: "Poudre Toxik",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'herbe",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
