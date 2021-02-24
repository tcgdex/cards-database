import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
	},
	illustrator: "Kouji Tajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		338,
	],
	hp: 90,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Heat Burn",
				fr: "Chaleur Brûlante",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Explosion",
				fr: "Explosion",
			},
			effect: {
				en: "This Pokémon does 90 damage to itself.",
				fr: "Ce Pokémon s'inflige 90 dégâts.",
			},
			damage: 90,

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
