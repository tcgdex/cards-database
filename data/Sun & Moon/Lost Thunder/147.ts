import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Morelull",
		fr: "Spododo",
	},
	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		755,
	],
	hp: 60,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Perplex",
				fr: "Affolement",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
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
