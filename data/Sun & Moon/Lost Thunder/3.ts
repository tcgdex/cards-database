import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		123,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade",
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 50 more damage. If all of them are heads, this attack does 70 more damage.",
				fr: "Lancez 3 pièces. S’il n’y a qu’un côté face, cette attaque inflige 20 dégâts supplémentaires. S’il y a 2 côtés face, cette attaque inflige 50 dégâts supplémentaires. S’il y a 3 côtés face, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
