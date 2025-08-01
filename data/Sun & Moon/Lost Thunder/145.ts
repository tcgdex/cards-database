import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Cutiefly",
		fr: "Bombydou",
		es: "Cutiefly",
		it: "Cutiefly",
		pt: "Cutiefly",
		de: "Wommel"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		742,
	],

	hp: 30,

	types: [
		"Fairy",
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
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 365782
	}
}

export default card
