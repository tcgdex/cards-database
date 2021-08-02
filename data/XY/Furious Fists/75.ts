import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Vibrava",
		fr: "Vibraninf",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		329,
	],
	hp: 80,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Trapinch",
		fr: "Kraknoix",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charge Energy",
				fr: "Recharge Énergétique",
			},
			effect: {
				en: "Search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez jusqu’à 2 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Fighting",
			],
			name: {
				en: "Vibration",
				fr: "Vibration",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
