import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Ursaring",
		fr: "Ursaring",
		es: "Ursaring",
		it: "Ursaring",
		pt: "Ursaring",
		de: "Ursaring"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		217,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Teddiursa",
		fr: "Teddiursa",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Adrenalash",
				fr: "Adrénarush",
			},
			effect: {
				en: "During your next turn, each of this Pokémon's attacks does 50 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strength",
				fr: "Force",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
