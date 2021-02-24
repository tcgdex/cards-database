import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Drifloon",
		fr: "Baudrive",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		425,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Delivery",
				fr: "Livraison",
			},
			effect: {
				en: "Flip a coin. If heads, put any 1 card from your discard pile into your hand.",
				fr: "Lancez une pièce. Si c'est face, placez dans votre main n'importe quelle carte de votre pile de défausse.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Reaction",
				fr: "Réagir",
			},
			effect: {
				en: "Switch Drifloon with 1 of your Benched Pokémon.",
				fr: "Échangez Baudrive avec 1 des Pokémon de votre Banc.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
