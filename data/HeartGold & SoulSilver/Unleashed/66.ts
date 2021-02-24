import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Tropius",
		fr: "Tropius",
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		357,
	],
	hp: 80,
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
				en: "Green Call",
				fr: "Appel de la verdure",
			},
			effect: {
				en: "Flip 2 coins. For each heads, search your deck for a Grass Pokémon, show it to your opponent, and put it into your hand. If you do, shuffle your deck afterward.",
				fr: "Lancez 2 pièces. Pour chaque côté face, cherchez un Pokémon Grass dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Dans ce cas, mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
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
