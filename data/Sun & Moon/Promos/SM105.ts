import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		745,
	],
	hp: 120,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Stone Edge",
				fr: "Lame de Roc",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
