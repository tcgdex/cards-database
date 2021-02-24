import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Arceus",
		fr: "Arceus",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		493,
	],
	hp: 120,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gather Light",
				fr: "Lumière Collectée",
			},
			effect: {
				en: "Move as many Energy as you like from your Benched Pokémon to this Pokémon.",
				fr: "Déplacez autant d'Énergies que vous voulez de vos Pokémon de Banc vers ce Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Judgment Blast",
			},
			effect: {
				en: "This attack does 30 more damage for each different type of basic Energy attached to this Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
