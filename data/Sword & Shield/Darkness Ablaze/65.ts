import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Dracozolt",
		fr: "Galvagon"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 160,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Rare Fossil",
		fr: "Fossile Rare"
	},



	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Amping Up",
				fr: "Amplificateur"
			},
			effect: {
				en: "During your next turn, this Pokémon’s Amping Up attack does 90 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Amplificateur de ce Pokémon inflige 90 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance)."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Impact",
				fr: "Giga Impact"
			},
			effect: {
				en: "During your next turn, this Pokémon can’t attack.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
