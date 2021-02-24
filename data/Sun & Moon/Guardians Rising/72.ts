import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Pancham",
		fr: "Pandespiègle",
	},
	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		674,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté",
			},
			effect: {
				en: "This attack does 10 less damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 60,

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
