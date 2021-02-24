import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Chespin",
		fr: "Marisson",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		650,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nosh",
				fr: "Casse-Croûte",
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
