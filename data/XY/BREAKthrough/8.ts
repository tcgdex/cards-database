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
				en: "Work",
				fr: "Travail",
				es: "Trabajo",
				it: "Lavoro",
				pt: "Trabalho",
				de: "Arbeit"
			},

			damage: 10,

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

	thirdParty: {
		cardmarket: 286253
	}
}

export default card
