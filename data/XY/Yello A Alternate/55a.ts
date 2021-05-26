import { Card } from '../../../interfaces'
import Set from '../Yello A Alternate'

const card: Card = {
	name: {
		fr: "M-Lucario-ex",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 220,
	types: [
		"Fighting",
	],
	evolveFrom: {
		fr: "Lucario-ex",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Poing Imminent",
			},
			effect: {
				fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 140,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
