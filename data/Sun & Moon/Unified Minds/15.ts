import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Fomantis",
		fr: "Mimantis",
		es: "Fomantis",
		it: "Fomantis",
		pt: "Fomantis",
		de: "Imantis"
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		753,
	],
	hp: 70,
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
				en: "Sweet Scent",
				fr: "Doux Parfum",
				es: "Dulce Aroma",
				it: "Profumino",
				pt: "Aroma Doce",
				de: "Lockduft"
			},
			effect: {
				en: "Heal 30 damage from 1 of your Pokémon.",
				fr: "Soignez 30 dégâts à l’un de vos Pokémon.",
				es: "Cura 30 puntos de daño a 1 de tus Pokémon.",
				it: "Cura uno dei tuoi Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano de 1 dos seus Pokémon.",
				de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leafage",
				fr: "Feuillage",
				es: "Follaje",
				it: "Fogliame",
				pt: "Folhagem",
				de: "Blattwerk"
			},

			damage: 10,

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
