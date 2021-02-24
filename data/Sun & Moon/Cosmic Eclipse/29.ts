import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor",
	},
	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		324,
	],
	hp: 110,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Fling",
				fr: "Dégommage Feu",
			},
			effect: {
				en: "Put 4 Fire Energy cards from your discard pile into your hand.",
				fr: "Ajoutez 4 cartes Énergie Fire de votre pile de défausse à votre main.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Kindle",
				fr: "Enflammer",
			},
			effect: {
				en: "Discard an Energy from this Pokémon. If you do, discard an Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 100,

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
