import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Weedle",
		fr: "Aspicot",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		13,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Munch",
				fr: "Mange-Feuille",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Grass Pokémon, this attack does 20 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Grass, cette attaque inflige 20 dégâts supplémentaires.",
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



}

export default card
