import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		67,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté",
			},
			effect: {
				en: "This attack does 60 damage minus 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 60 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: "60−",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Submission",
				fr: "Sacrifice",
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s’inflige 20 dégâts.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
