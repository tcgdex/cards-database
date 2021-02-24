import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Natu",
		fr: "Natu",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		177,
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
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
