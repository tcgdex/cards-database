import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Drifloon",
		fr: "Baudrive",
	},
	illustrator: "kodama",
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
			cost: [
				"Colorless",
			],
			name: {
				en: "Transfer Pain",
				fr: "Transfert de Douleur",
			},
			effect: {
				en: "Move 1 damage counter from 1 of your Pokémon to 1 of your opponent’s Pokémon.",
				fr: "Déplacez 1 marqueur de dégâts de l’un de vos Pokémon vers l’un des Pokémon de votre adversaire.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
