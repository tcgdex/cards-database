import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Meloetta",
		fr: "Meloetta",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		648,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Smack",
				fr: "Claque",
			},

			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Acrobatics",
				fr: "Acrobatie",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
