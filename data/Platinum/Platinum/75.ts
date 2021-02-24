import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv",
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		88,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Division",
				fr: "Division",
			},
			effect: {
				en: "Search your deck for Grimer and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez Tadmorv dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Poison Gas",
				fr: "Gaz toxik",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 2,



}

export default card
