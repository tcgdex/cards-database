import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Grotle",
		fr: "Boskara",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		388,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Turtwig",
		fr: "Tortipouss",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Synthesis",
				fr: "Synthése",
			},
			effect: {
				en: "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie Grass, et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cut",
				fr: "Coupe",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
