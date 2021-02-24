import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Misdreavus",
		fr: "Feuforeve",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		200,
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
				en: "Mumble",
				fr: "Marmonner",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dual Draw",
				fr: "Pioche mutuelle",
			},
			effect: {
				en: "Each player draws 3 cards.",
				fr: "Chaque joueur pioche 3 cartes.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
