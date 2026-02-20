import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Wimpod",
		fr: "Sovkipou",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare Shiny",
	category: "Pokemon",

	set: Set,
	dexId: [
		767,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wimp Out",
				fr: "Escampette",
			},
			effect: {
				en: "During your first turn, this Pokémon has no Retreat Cost.",
				fr: "Pendant votre premier tour, ce Pokémon n’a pas de Coût de Retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
