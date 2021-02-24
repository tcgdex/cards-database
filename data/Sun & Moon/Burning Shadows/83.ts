import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Alolan Grimer",
		fr: "Tadmorv d’Alola",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		88,
	],
	hp: 80,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Division",
				fr: "Division",
			},
			effect: {
				en: "Search your deck for Alolan Grimer and put it onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez Tadmorv d’Alola dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slippery Sludge",
				fr: "Gadoue Glissante",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
