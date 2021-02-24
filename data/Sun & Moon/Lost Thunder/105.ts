import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Mareanie",
		fr: "Vorastérie",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		747,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Pin Missile",
				fr: "Dard-Nuée",
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			},
			damage: 10,

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
