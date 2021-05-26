import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Marshadow",
		fr: "Marshadow",
	},
	illustrator: "0313",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		802,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Imitation",
				fr: "Ombre Imitante",
			},
			effect: {
				en: "Choose 1 of your opponent's Active Pokémon's non-GX attacks and use it as this attack.",
				fr: "Choisissez l’une des attaques non GX du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
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
