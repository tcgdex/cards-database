import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Zubat",
		fr: "Nosferapti",
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		41,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Free Flight",
				fr: "Vol Gratuit",
			},
			effect: {
				en: "If this Pokémon has no Energy attached to it, this Pokémon has no Retreat Cost.",
				fr: "Si aucune Énergie n'est attachée à ce Pokémon, ce Pokémon n'a pas de coût de Retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-Aile",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
