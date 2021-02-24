import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Clawitzer",
		fr: "Gamblast",
	},
	illustrator: "otumami",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		693,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clauncher",
		fr: "Flingouste",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Standing By",
				fr: "État d’Alerte",
			},
			effect: {
				en: "During your next turn, this Pokémon's Sharpshooting attack does 120 damage instead of 40.",
				fr: "Pendant votre prochain tour, l’attaque Tir de Précision de ce Pokémon inflige 120 dégâts au lieu de 40.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sharpshooting",
				fr: "Tir de Précision",
			},
			effect: {
				en: "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 40 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

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
