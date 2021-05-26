import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zekrom",
		fr: "Zekrom"
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Lightning",
	],




	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Wild Shock",
				fr: "Éclair Sauvage"
			},
			effect: {
				en: "This Pokémon also does 60 damage to itself. Your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Ce Pokémon s’inflige aussi 60 dégâts. Le Pokémon Actif de votre adversaire est maintenant Paralysé."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
