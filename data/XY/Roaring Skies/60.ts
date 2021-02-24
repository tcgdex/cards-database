import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Rayquaza-EX",
		fr: "Rayquaza-EX",
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 180,
	types: [
		"Dragon",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dragon Strike",
				fr: "Frappe du Dragon",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon can't use Dragon Strike during your next turn.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas utiliser Frappe du Dragon pendant votre prochain tour.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
