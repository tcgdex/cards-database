import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Hippowdon",
		fr: "Hippodocus"
	},
	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas"
	},



	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Triple Smash",
				fr: "Triple Éclate"
			},
			effect: {
				en: "Flip 3 coins. This attack does 80 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 80 dégâts pour chaque côté face."
			},
			damage: "80×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Land Crush",
				fr: "Écras’Terre"
			},

			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
