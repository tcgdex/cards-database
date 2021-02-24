import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		324,
	],
	hp: 110,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "High-Pressure Heat",
				fr: "Chaleur Sous Pression",
			},
			effect: {
				en: "During your next turn, this Pokémon's High-Pressure Heat attack does 50 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Chaleur Sous Pression de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
