import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Drowzee",
		fr: "Soporifik",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		96,
	],
	hp: 70,
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
				en: "Sinister Suggestion",
				fr: "Suggestion Sinistre",
			},
			effect: {
				en: "Whenever your opponent flips a coin during his or her next turn, treat it as tails.",
				fr: "Chaque fois que votre adversaire lance une pièce pendant son prochain tour, considérez que c'est pile.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
