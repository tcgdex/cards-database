import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Weavile",
		fr: "Dimoret",
	},
	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		461,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Nasty Plot",
				fr: "Machination",
			},
			effect: {
				en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes dans votre deck, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Slashing Claw",
				fr: "Griffe Taillante",
			},

			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
