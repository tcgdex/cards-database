import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		88,
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
				en: "Sticky Liquid",
				fr: "Liquide gluant",
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon’s Retreat Cost is Colorless more.",
				fr: "Pendant le prochain tour de votre adversaire, le Coût de retraite du Pokémon Défenseur est augmenté de Colorless.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sludge Toss",
				fr: "Décision vaseuse",
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
