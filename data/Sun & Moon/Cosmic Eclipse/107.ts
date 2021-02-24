import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Trapinch",
		fr: "Kraknoix",
	},
	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		328,
	],
	hp: 50,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nest Building",
				fr: "Nidification",
			},
			effect: {
				en: "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez une carte Stade dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Sand Spray",
				fr: "Jet Sableux",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
