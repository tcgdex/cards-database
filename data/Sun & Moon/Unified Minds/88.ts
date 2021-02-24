import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Munna",
		fr: "Munna",
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		517,
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
				en: "Future Sight",
				fr: "Prescience",
			},
			effect: {
				en: "Look at the top 4 cards of either player's deck and put them back in any order.",
				fr: "Regardez les 4 cartes du dessus du deck de l’un des joueurs et replacez-les dans l’ordre de votre choix.",
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
