import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Aipom",
		fr: "Capumain",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		190,
	],
	hp: 50,
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
				en: "Tail Code",
				fr: "Queue codée",
			},
			effect: {
				en: "Move an Energy card attached to the Defending Pokémon to another of your opponent’s Pokémon.",
				fr: "Prenez une carte Énergie attachée au Pokémon Défenseur et attachez-la à un autre des Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Smash",
				fr: "Éclate-queue",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
			damage: 30,

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
