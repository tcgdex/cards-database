import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Beldum",
		fr: "Terhal"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		374,
	],
	hp: 50,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Magnetic Lines",
				fr: "Lignes magnétiques"
			},
			effect: {
				en: "Flip a coin. If heads, move a basic Energy card from the Defending Pokémon to another of your opponent's Pokémon. (Ignore this effect if your opponent has only 1 Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, déplacez une carte Énergie de base du Pokémon Défenseur sur un autre des Pokémon de votre adversaire. (Ignorez cet effet si votre adversaire ne possède qu'1 Pokémon.)"
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
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
