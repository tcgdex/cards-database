import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Sewaddle",
		fr: "Larveyette",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		540,
	],
	hp: 50,
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
				en: "Multiply",
				fr: "Multiplication",
			},
			effect: {
				en: "Search your deck for up to 2 Sewaddle and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 Larveyette dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
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

	retreat: 1,



}

export default card
