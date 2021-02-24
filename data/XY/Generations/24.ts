import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Vaporeon-EX",
		fr: "Aquali-EX",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		134,
	],
	hp: 180,
	types: [
		"Water",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Bubble Drain",
				fr: "Vide Bulle",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Deep Squall",
				fr: "Rafale Profonde",
			},
			effect: {
				en: "This attack does 130 damage minus 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 130 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
