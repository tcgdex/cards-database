import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Combee",
		fr: "Apitrini",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		415,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bee March",
				fr: "Marche Apicole",
			},
			effect: {
				en: "Search your deck for up to 3 Combee and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 Apitrini dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
