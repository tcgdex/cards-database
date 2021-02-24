import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Wishiwashi",
		fr: "Froussardine",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		746,
	],
	hp: 180,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scatter",
				fr: "Éparpillement",
			},
			effect: {
				en: "At the end of your opponent's turn, if this Pokémon has any damage counters on it, flip a coin. If tails, shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "À la fin du tour de votre adversaire, si ce Pokémon a des marqueurs de dégâts, lancez une pièce. Si c’est pile, mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hydro Splash",
				fr: "Hydro-Éclaboussure",
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
