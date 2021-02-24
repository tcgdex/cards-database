import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Azelf",
		fr: "Créfadet",
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		482,
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
				en: "Psychic Abduction",
				fr: "Enlèvement Psy",
			},
			effect: {
				en: "You can use this attack only if you go second, and only on your first turn. Shuffle 1 of your opponent's Benched Pokémon and all cards attached to it into their deck.",
				fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Mélangez l’un des Pokémon de Banc de votre adversaire et toutes les cartes qui lui sont attachées avec son deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
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
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
