import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Aurorus EX",
		'fr-fr': "Dragmara EX",
	},

	illustrator: "Toyste Beach",
	rarity: "Promo",
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
				'en-us': "Frozen Charm",
				'fr-fr': "Amulette Gelée",
			},
			effect: {
				'en-us': "Each of your Pokémon that has any Water Energy attached to it can't be Paralyzed. (If any of those Pokémon are Paralyzed, remove that Special Condition.)",
				'fr-fr': "Aucun de vos Pokémon auquel de l'Énergie Water est attachée ne peut être Paralysé. (Si l'un de ces Pokémon est déjà Paralysé, retirez cet État Spécial.)",
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
				'en-us': "Crystal Breath",
				'fr-fr': "Souffle de Cristal"
			},
			effect: {
				'en-us': "This Pokémon can't attack during your next turn",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour."
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

	thirdParty: {
		cardmarket: 289822
	}
}

export default card
