import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Wimpod",
		fr: "Sovkipou",
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		767,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scamper Away",
				fr: "Cavalcade",
			},
			effect: {
				en: "Shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
