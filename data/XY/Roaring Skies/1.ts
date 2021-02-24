import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		102,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Loathe",
				fr: "Dégoût",
			},
			effect: {
				en: "Flip a coin. If heads, switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Lancez une pièce. Si c'est face, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Grass",
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
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
