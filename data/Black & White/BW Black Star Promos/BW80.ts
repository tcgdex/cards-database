import { Card } from '../../../interfaces'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		621,
	],
	hp: 100,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Taunt",
				fr: "Provoc",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with the Defending Pokémon.",
				fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Boost Claw",
				fr: "Griffoboost",
			},
			effect: {
				en: "During your next turn, each of this Pokémon's attacks does 30 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
