import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Taillow",
		fr: "Nirondelle",
		de: "Schwalbini"
	},

	illustrator: "Takao Unno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		276,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Focus Energy",
				fr: "Puissance",
				de: "Energiefokus"
			},
			effect: {
				en: "During your next turn, Taillow's Peck attack's base damage is 30.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Picpic de Nirondelle sont de 30.",
				de: "In deinem nächsten Zug beträgt der Grundschaden von Schwalbinis Angriff Schnabel 30 Schadenspunkte."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				de: "Schnabel"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278273
	}
}

export default card
