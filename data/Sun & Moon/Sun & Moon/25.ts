import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Torracat",
		fr: "Matoufeu",
	},
	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		726,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Litten",
		fr: "Flamiaou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-Griffe",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
