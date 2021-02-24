import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Golduck",
		fr: "Akwakwak",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		55,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
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
				en: "Energy Loop",
				fr: "Boucle d’Énergie",
			},
			effect: {
				en: "Put an Energy attached to this Pokémon into your hand.",
				fr: "Placez une Énergie attachée à ce Pokémon dans votre main.",
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

	retreat: 1,



}

export default card
