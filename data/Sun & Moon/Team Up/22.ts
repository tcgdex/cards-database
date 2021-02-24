import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Squirtle",
		fr: "Carapuce",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		7,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Floating Shell",
				fr: "Carapace Flottante",
			},
			effect: {
				en: "If you have a Stadium card in play, this Pokémon has no Retreat Cost.",
				fr: "Si vous avez une carte Stade en jeu, ce Pokémon n’a pas de Coût de Retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
