import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Wartortle",
		fr: "Carabaffe",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		8,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Squirtle",
		fr: "Carapuce",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Arrow",
				fr: "Flèche d'eau",
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon. This attack does 20 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
