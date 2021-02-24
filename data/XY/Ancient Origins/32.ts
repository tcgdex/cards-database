import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Baltoy",
		fr: "Balbuto",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		343,
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
			],
			name: {
				en: "Future Spin",
				fr: "Stop Θ",
			},
			effect: {
				en: "Look at the top 3 cards of either player's deck and put them back on top of that player's deck in any order.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				fr: "Tour du Futur",
			},
			effect: {
				fr: "Regardez les 3 cartes du dessus du deck de l'un des joueurs et replacez-les sur le dessus du deck de ce joueur dans l'ordre de votre choix.",
			},

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
