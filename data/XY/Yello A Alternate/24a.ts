import { Card } from '../../../interfaces'
import Set from '../Yello A Alternate'

const card: Card = {
	name: {
		fr: "M-Élecsprint-ex",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 210,
	types: [
		"Lightning",
	],
	evolveFrom: {
		fr: "Élecsprint-ex",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Éclair Turbo",
			},
			effect: {
				fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
