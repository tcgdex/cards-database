import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "White Kyurem",
		'fr-fr': "Kyurem Blanc"
	},

	illustrator: "kawayoo",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 130,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Burning Icicles",
				'fr-fr': "Stalactites Brûlantes"
			},
			effect: {
				'en-us': "If this Pokémon has any Fire Energy attached to it, this attack does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si de l'Énergie  est attachée à ce Pokémon, cette attaque inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Blizzard Burn",
				'fr-fr': "Blizzard Étourdissant"
			},
			effect: {
				'en-us': "This Pokémon can't attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It generates a powerful, freezing energy inside itself, but its body becomes frozen when the energy leaked out.",
	},

	thirdParty: {
		cardmarket: 289804
	}
}

export default card
