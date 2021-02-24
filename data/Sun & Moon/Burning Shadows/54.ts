import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Croagunk",
		fr: "Cradopaud",
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		453,
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
				en: "Corkscrew Punch",
				fr: "Poing Tire-Bouchon",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Frog Hop",
				fr: "Bond de Grenouille",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
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

	retreat: 1,



}

export default card
