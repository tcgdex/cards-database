import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Tangela",
		fr: "Saquedeneu",
	},
	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		114,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Toxic",
				fr: "Toxik",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d’un sur ce Pokémon-là entre chaque tour.",
			},

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
