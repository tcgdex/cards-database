import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Carnivine",
		fr: "Vortente",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		455,
	],
	hp: 90,
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
				en: "Chomp Chomp",
				fr: "Mangeouille",
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Loom Over",
				fr: "Menacer",
			},
			effect: {
				en: "This attack does 10 less damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 90,

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
