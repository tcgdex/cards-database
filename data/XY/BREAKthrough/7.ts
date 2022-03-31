import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Chespin",
		fr: "Marisson",
		es: "Chespin",
		it: "Chespin",
		pt: "Chespin",
		de: "Igamaro"
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
				es: "Piscolabis",
				it: "Spuntino",
				pt: "Mordiscar",
				de: "Snack"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				es: "Cura 20 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 20 danni.",
				pt: "Cure 20 de danos deste Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
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
				es: "Bomba Germen",
				it: "Semebomba",
				pt: "Bomba de Sementes",
				de: "Samenbomben"
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
