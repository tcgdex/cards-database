import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Venipede",
		fr: "Venipatte",
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		543,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Bug Bite",
				fr: "Piqûre",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venoshock",
				fr: "Choc Venin",
			},
			effect: {
				en: "If your opponent's Active Pokémon is Poisoned, this attack does 40 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
