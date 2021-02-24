import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Litleo",
		fr: "Hélionceau",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		667,
	],
	hp: 60,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wild Dash",
				fr: "Panique Sauvage",
			},
			effect: {
				en: "If your opponent has any Pokémon-GX or Pokémon-EX in play, this Pokémon has no Retreat Cost.",
				fr: "Si votre adversaire a au moins un Pokémon-GX ou Pokémon-EX en jeu, ce Pokémon n’a pas de Coût de Retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s’inflige 10 dégâts.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
