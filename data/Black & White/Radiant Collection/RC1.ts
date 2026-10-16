import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Chikorita",
		es: "Chikorita",
	},

	illustrator: "Sonosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		152,
	],

	hp: 50,

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
				en: "Run Around",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Vine Whip",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		
	],

	retreat: 1,

	description: {
		en: "Running around, climbing trees, playing hide-and-seek! Another wonderful day begins!",
	},

	thirdParty: {
		cardmarket: 280741,
		tcgplayer: 90081
	}
}

export default card
