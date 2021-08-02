import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "M Charizard EX",
		fr: "M Dracaufeu EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 220,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crimson Dive",
				fr: "Plongeon Écarlate",
			},
			effect: {
				en: "This Pokémon does 50 damage to itself.",
				fr: "Ce Pokémon s’inflige 50 dégâts."
			},
			damage: 300,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Plongeon Écarlate",
			},
			effect: {
				fr: "Ce Pokémon s'inflige 50 dégâts.",
			},
			damage: 300,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
