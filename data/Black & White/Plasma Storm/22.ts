import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Lampent",
		fr: "Mélancolux",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		608,
	],
	hp: 70,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Freefloating",
				fr: "Apesanteur",
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
				"Fire",
				"Colorless",
			],
			name: {
				en: "Will-O-Wisp",
				fr: "Feu Follet",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
