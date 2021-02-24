import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Tapu Bulu",
		fr: "Tokotoro",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		787,
	],
	hp: 130,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Heavy Punch",
				fr: "Poing Lourd",
			},
			effect: {
				en: "This attack does 20 damage for each of your opponent's Benched Pokémon.",
				fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon de Banc de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Wild Tackle",
				fr: "Tacle Brutal",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
				fr: "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 30 dégâts.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
