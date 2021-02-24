import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Dragalge",
		fr: "Kravarech",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		691,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Skrelp",
		fr: "Venalgue",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Poison Cultivation",
				fr: "Culture de Poison",
			},
			effect: {
				en: "If your opponent's Active Pokémon is Poisoned, put 10 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, placez 10 marqueurs de dégâts au lieu d’un sur ce Pokémon-là entre chaque tour.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sharp Fin",
				fr: "Aileron Aiguisé",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
