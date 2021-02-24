import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Phantump",
		fr: "Brocélôme",
	},
	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		708,
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
				fr: "Murmure",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Spooky Shot",
				fr: "Tir Effrayant",
			},

			damage: 20,

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
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
