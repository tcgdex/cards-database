import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Oddish",
		fr: "Mystherbe",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		43,
	],
	hp: 40,
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
				en: "Ram",
				fr: "Collision",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Find a Friend",
				fr: "Trouver un ami",
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Grass Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, cherchez un Pokémon Grass dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
