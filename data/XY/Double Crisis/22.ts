import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma's Zangoose",
		fr: "Mangriff de la Team Magma",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		335,
	],
	hp: 90,
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
				en: "Call for Family",
				fr: "Appel à la Famille",
			},
			effect: {
				en: "Search your deck for up to 2 Basic Team Magma Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 Pokémon de base de la Team Magma dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Team Play",
				fr: "Jeu d'Équipe",
			},
			effect: {
				en: "This attack does 20 damage times the number of Team Magma Pokémon on your Bench.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon de la Team Magma sur votre Banc.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
