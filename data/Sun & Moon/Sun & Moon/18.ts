import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Bounsweet",
		fr: "Croquine",
		es: "Bounsweet",
		it: "Bounsweet",
		pt: "Bounsweet",
		de: "Frubberl"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		761,
	],

	hp: 60,

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
				en: "Sweet Scent",
				fr: "Doux Parfum",
				es: "Dulce Aroma",
				it: "Profumino",
				pt: "Aroma Doce",
				de: "Lockduft"
			},
			effect: {
				en: "Heal 30 damage from 1 of your Pokémon.",
				fr: "Soignez 30 dégâts à l’un de vos Pokémon.",
				es: "Cura 30 puntos de daño a 1 de tus Pokémon.",
				it: "Cura uno dei tuoi Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano de 1 dos seus Pokémon.",
				de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Splash",
				fr: "Trempette",
				es: "Salpicadura",
				it: "Splash",
				pt: "Borrifada",
				de: "Platscher"
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

	thirdParty: {
		cardmarket: 295326
	}
}

export default card
