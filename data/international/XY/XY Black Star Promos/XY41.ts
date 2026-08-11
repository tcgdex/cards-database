import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Kyogre EX",
		'fr-fr': "Kyogre EX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
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
				'en-us': "Water Pulse",
				'fr-fr': "Vibraqua",
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giant Whirlpool",
				'fr-fr': "Siphon Colossal",
			},
			effect: {
				'en-us': "Return 2 Water Energy attached to this Pokémon to your hand.",
				'fr-fr': "Reprenez 2 Énergies Water attachées à ce Pokémon dans votre main.",
			},
			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 553479
	}
}

export default card
