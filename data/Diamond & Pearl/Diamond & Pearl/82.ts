import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		92,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pain Payback",
				fr: "Renvoi de souffrance",
			},
			effect: {
				en: "Move 1 damage counter from Gastly to 1 of your opponent's Pokémon.",
				fr: "Déplacez 1 marqueur de dégât de Fantominus sur 1 des Pokémon de votre adversaire.",
			},

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
