import { Card } from '../../../interfaces'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		en: "Froakie",
		fr: "Grenousse",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		656,
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
				en: "Frubbles",
				fr: "Grebulles",
			},
			effect: {
				en: "If this Pokémon has any Water Energy attached to it, it has no Retreat Cost.",
				fr: "Si de l’Énergie Water est attachée à ce Pokémon, il n’a pas de coût de Retraite.",
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
				en: "Flop",
				fr: "Flop",
			},

			damage: 20,

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
