import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Goomy",
		fr: "Mucuscule",
	},
	illustrator: "Ken Sugimori",
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
				"Water",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie Éclaboussante",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
			},
			effect: {
				en: "This attack does 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 10,

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
