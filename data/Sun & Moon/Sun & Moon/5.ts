import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
	},
	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		47,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Paras",
		fr: "Paras",
	},
	stage: "Stage1",


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
				en: "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 60 more damage. If all of them are heads, this attack does 120 more damage.",
				fr: "Lancez 3 pièces. S’il n’y a qu’un côté face, cette attaque inflige 20 dégâts supplémentaires. S’il y a 2 côtés face, cette attaque inflige 60 dégâts supplémentaires. S’il y a 3 côtés face, cette attaque inflige 120 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Mushroom Drain",
				fr: "Champi Drain",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
