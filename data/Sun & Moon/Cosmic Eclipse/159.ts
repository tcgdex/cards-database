import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Drampa",
		fr: "Draïeul",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		780,
	],
	hp: 120,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Arcana",
				fr: "Savoir Draconique",
			},
			effect: {
				en: "If this Pokémon has 2 or more different types of basic Energy attached to it, this attack does 70 more damage.",
				fr: "Si 2 types d’Énergie de base ou plus sont attachées à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
