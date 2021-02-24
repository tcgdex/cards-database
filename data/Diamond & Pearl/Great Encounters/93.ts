import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Weedle",
		fr: "Aspicot",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		13,
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
				en: "Call for Family",
				fr: "Appel à la famille",
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "String Shot",
				fr: "Sécrétion",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
