import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "M Slowbro EX",
		fr: "M-Flagadoss-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		80,
	],
	hp: 220,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Slowbro-EX",
		fr: "Flagadoss-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Loll Roll Spin",
				fr: "Tournicote",
			},
			effect: {
				en: "This Pokémon is now Confused. During your next turn, this Pokémon’s Loll Roll Spin attack does 100 more damage (before applying Weakness and Resistance).",
				fr: "Ce Pokémon est maintenant Confus. Pendant votre prochain tour, l’attaque Tournicote de ce Pokémon inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: "100+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
