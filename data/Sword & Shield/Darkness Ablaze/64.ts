import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Pincurchin",
		fr: "Wattapik"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Double Draw",
				fr: "Double Pioche"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Zing Zap",
				fr: "Électrikipik"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
