import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Zorua",
		fr: "Zorua",
	},
	illustrator: "Toyste Beach",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		570,
	],
	hp: 50,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Nasty Plot",
				fr: "Machination",
			},
			effect: {
				en: "Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte dans votre deck et ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
