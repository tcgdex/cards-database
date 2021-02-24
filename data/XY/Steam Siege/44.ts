import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Nidorino",
		fr: "Nidorino",
	},
	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		33,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Nido Press",
				fr: "Charge Nido",
			},
			effect: {
				en: "If Nidorina is on your Bench, this attack does 40 more damage.",
				fr: "Si Nidorina est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 40,

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
