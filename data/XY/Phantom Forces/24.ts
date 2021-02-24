import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "M Manectric-EX",
		fr: "M-Élecsprint-EEX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		310,
	],
	hp: 210,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Manectric-EX",
		fr: "Élecsprint-eEX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Turbo Bolt",
				fr: "Éclair Turbo",
			},
			effect: {
				en: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
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
