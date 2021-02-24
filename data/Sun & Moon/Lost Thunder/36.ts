import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Gogoat",
		fr: "Chevroum",
	},
	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		673,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leaf Wallop",
				fr: "Rafale de Feuilles",
			},
			effect: {
				en: "During your next turn, this Pokémon's Leaf Wallop attack does 50 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Rafale de Feuilles de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
