import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Zekrom",
		fr: "Zekrom",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		644,
	],
	hp: 130,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shred",
				fr: "Déchiquetage",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 70,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bolt Strike",
				fr: "Charge Foudre",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 50 damage to itself.",
				fr: "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 50 dégâts.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
