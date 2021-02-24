import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Snover",
		fr: "Blizzi",
	},
	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		459,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Powder Snow",
				fr: "Poudreuse",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
