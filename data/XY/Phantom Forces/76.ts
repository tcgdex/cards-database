import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Sliggoo",
		fr: "Colimucus",
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		705,
	],
	hp: 80,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Goomy",
		fr: "Mucuscule",
	},
	stage: "Stage1",


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
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Gentle Slap",
				fr: "Gifle Douce",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
