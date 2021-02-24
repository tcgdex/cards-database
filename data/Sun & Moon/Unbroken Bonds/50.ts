import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Kyurem",
		fr: "Kyurem",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 130,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call Forth Cold",
				fr: "Appel au Froid",
			},
			effect: {
				en: "Search your deck for a Water Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie Water dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hail Prison",
				fr: "Prison de Grêle",
			},
			effect: {
				en: "Discard 2 Water Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
				fr: "Défaussez 2 Énergies Water de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
