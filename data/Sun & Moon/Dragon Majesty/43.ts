import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Shelgon",
		fr: "Drackhaus",
	},
	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		372,
	],
	hp: 80,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Bagon",
		fr: "Draby",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Energy Guard",
				fr: "Conservateur d’Énergie",
			},
			effect: {
				en: "If this Pokémon has any basic Energy attached to it, it takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Si de l’Énergie de base est attachée à ce Pokémon, il subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
			},

			damage: 30,

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
