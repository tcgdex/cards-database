import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Floette",
		fr: "Floette",
	},
	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		670,
	],
	hp: 70,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Flabébé",
		fr: "Flabébé",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Swirling Petals",
				fr: "Pétales Tourbillonnants",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. If you do, switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Dans ce cas, échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
