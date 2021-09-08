import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Togepi",
		fr: "Togepi",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		175,
	],
	hp: 40,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Plead",
				fr: "Supplication",
			},
			effect: {
				en: "Ask your opponent if you may draw 2 cards. If yes, draw 2 cards. If no, this attack does 20 damage to the Defending Pokémon.",
				fr: "Demandez à votre adversaire si vous pouvez piocher 2 cartes. S’il accepte, piochez 2 cartes. S’il refuse, cette attaque inflige 20 dégâts au Pokémon Défenseur.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
