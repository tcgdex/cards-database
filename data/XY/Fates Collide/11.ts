import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Fennekin",
		fr: "Feunnec",
	},
	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		653,
	],
	hp: 50,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Invite Out",
				fr: "Invitation à Sortir",
			},
			effect: {
				en: "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
				fr: "Lancez une pièce. Si c'est face, échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
