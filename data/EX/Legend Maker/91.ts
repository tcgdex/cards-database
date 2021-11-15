import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Regirock Star",
		fr: "Regirock ☆"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		377,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Dig Drain",
				fr: "Trou épuisant"
			},
			effect: {
				en: "Remove 1 damage counter from Regirock Star.",
				fr: "Retirez à Regirock  1 marqueur de dégât."
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Final Blast",
				fr: "Explosion finale"
			},
			effect: {
				en: "If your opponent has only 1 Prize card left and Regirock Star is the only Pokémon you have in play, this attack's base damage is 100 instead of 30.",
				fr: "S'il reste à votre adversaire une seule carte Récompense et que Regirock  est le seul Pokémon que vous ayez en jeu, les dégâts de base de cette attaque sont de 100 au lieu de 30."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
