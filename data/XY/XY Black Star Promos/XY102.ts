import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Aurorus EX",
		fr: "Dragmara EX",
	},
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		699,
	],
	hp: 180,
	types: [
		"Water",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Frozen Charm",
				fr: "Amulette Gelée",
			},
			effect: {
				en: "Each of your Pokémon that has any Water Energy attached to it can't be Paralyzed. (If any of those Pokémon are Paralyzed, remove that Special Condition.)",
				fr: "Aucun de vos Pokémon auquel de l'Énergie Water est attachée ne peut être Paralysé. (Si l'un de ces Pokémon est déjà Paralysé, retirez cet État Spécial.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Crystal Breath",
			},
			effect: {
				en: "This Pokémon can't attack during your next turn",
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
