import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan",
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		10,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Adaptive Evolution",
				'fr-fr': "Évolution Adaptative",
			},
			effect: {
				'en-us': "This Pokémon can evolve during your first turn or the turn you play it.",
				'fr-fr': "Ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bug Bite",
				'fr-fr': "Piqûre",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "For protection, it releases a horrible stench from the antennae on its head to drive away enemies.",
	},

	thirdParty: {
		cardmarket: 288445,
		tcgplayer: 113661
	}
}

export default card
