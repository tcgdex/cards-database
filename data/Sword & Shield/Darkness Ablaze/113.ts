import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Thievul",
		fr: "Roublenard"
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Nickit",
		fr: "Goupilou"
	},



	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Nasty Plot",
				fr: "Machination"
			},
			effect: {
				en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé"
			},

			damage: 70,

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
