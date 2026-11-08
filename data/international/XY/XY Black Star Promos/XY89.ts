import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thunder Wave",
				'fr-fr': "Cage-Éclair",
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electric Ring",
				'fr-fr': "Anneau Électrique"
			},
			effect: {
				'en-us': "If Hoopa is on your Bench, this attack does 30 more damage.",
				'fr-fr': "Si Hoopa est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs.",
	},

	thirdParty: {
		cardmarket: 554190
	}
}

export default card
