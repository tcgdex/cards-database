import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Crustle",
		fr: "Crabaraque",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		558,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Dwebble",
		fr: "Crabicoque",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shell Armor",
				fr: "Coque Armure",
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade",
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 40 more damage. If 2 of them are heads, this attack does 80 more damage. If all of them are heads, this attack does 150 more damage.",
				fr: "Lancez 3 pièces. S’il n’y a qu’un côté face, cette attaque inflige 40 dégâts supplémentaires. S’il y a 2 côtés face, cette attaque inflige 80 dégâts supplémentaires. S’il y a 3 côtés face, cette attaque inflige 150 dégâts supplémentaires.",
			},
			damage: 50,

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
