import { Card } from 'models/database/card'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		'en-us': "M Manectric-EX",
		'fr-fr': "M-Élecsprint-ex",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	dexId: [310],
	set: Set,

	hp: 210,
	types: [
		"Lightning",
	],
	evolveFrom: {
		'en-us': "Manectric-ex",
		'fr-fr': "Élecsprint-ex",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Turbo Bolt",
				'fr-fr': "Éclair Turbo",
			},
			effect: {
				'en-us': "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
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
