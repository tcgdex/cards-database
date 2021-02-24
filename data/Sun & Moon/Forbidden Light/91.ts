import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Goomy",
		fr: "Mucuscule",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		704,
	],
	hp: 40,
	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sticky Membrane",
				fr: "Membrane Gluante",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent's Pokémon's attacks cost Colorless more.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques des Pokémon de votre adversaire coûtent Colorless de plus.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
