import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		752,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headstrike",
				fr: "Coup de Tête",
			},

			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Liquidation",
				fr: "Aqua-Brèche",
			},
			effect: {
				en: "During your next turn, the Defending Pokémon takes 60 more damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, le Pokémon Défenseur subit 60 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
