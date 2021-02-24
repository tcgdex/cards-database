import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Goomy",
		fr: "Mucuscule",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		704,
	],
	hp: 50,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gooey",
				fr: "Poisseux",
			},
			effect: {
				en: "Heal 10 damage from this Pokémon.",
				fr: "Soignez 10 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Fairy",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
