import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Prinplup",
		fr: "Prinplouf",
	},
	illustrator: "Hasuno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		394,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Piplup",
		fr: "Tiplouf",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Drip",
				fr: "Goutte à Goutte",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Direct Dive",
				fr: "Plongeon Direct",
			},
			effect: {
				en: "Discard all Energy from this Pokémon. This attack does 100 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez toute l’Énergie de ce Pokémon. Cette attaque inflige 100 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
