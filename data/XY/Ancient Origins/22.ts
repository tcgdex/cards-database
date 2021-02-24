import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Vaporeon",
		fr: "Aquali",
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		134,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Aqua Effect",
				fr: "Effet Aqua",
			},
			effect: {
				en: "Each of your Stage 1 Pokémon in play is now a Water Pokémon in addition to its existing types.",
				fr: "Chacun de vos Pokémon de Niveau 1 en jeu est maintenant un Pokémon Water en plus de ses types existants.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Splash",
				fr: "Hydro-Éclaboussure",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
