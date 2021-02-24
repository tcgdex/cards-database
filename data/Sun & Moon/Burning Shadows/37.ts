import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Simipour",
		fr: "Flotoutan",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		516,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Reflect",
				fr: "Reflet Aquatique",
			},
			effect: {
				en: "Move a Water Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie Water de ce Pokémon vers l’un de vos Pokémon de Banc.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
