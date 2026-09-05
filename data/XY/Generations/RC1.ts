import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Chikorita",
		fr: "Germignon",
		de: "Endivie"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [25],

	dexId: [
		152,
	],

	hp: 50,

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
				en: "Run Around",
				fr: "Course Effrénée",
				de: "Herumrennen"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet Lianes",
				de: "Rankenhieb"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Running around, climbing trees, playing hide-and-seek! Another wonderful day begins!",
		de: "Herumlaufen, auf Bäume klettern, Versteck spielen! Wieder bricht ein wundervoller Tag an!"
	},

	thirdParty: {
		cardmarket: 288510
	}
}

export default card
