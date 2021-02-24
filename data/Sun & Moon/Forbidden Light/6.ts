import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Scatterbug",
		fr: "Lépidonille",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		664,
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
				en: "Ultra Evolution",
				fr: "Ultra Évolution",
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for Vivillon and put it onto this Scatterbug to evolve it. Then, shuffle your deck.",
				fr: "Lancez une pièce. Si c’est face, cherchez un Prismillon dans votre deck, puis placez-le sur ce Lépidonille pour le faire évoluer. Mélangez ensuite votre deck.",
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
