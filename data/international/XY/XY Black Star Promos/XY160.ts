import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Black Kyurem",
		'fr-fr': "Kyurem Noir"
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
				"Colorless",
			],
			name: {
				'en-us': "Ice Wing",
				'fr-fr': "Aile Glace"
			},

			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frosty Thunder",
				'fr-fr': "Tonnerre Givré"
			},
			effect: {
				'en-us': "If this Pokémon has any Lightning Energy attached to it, this attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si de l'Énergie  est attachée à ce Pokémon, cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 120,

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
		'en-us': "It generates a powerful, freezing energy inside itself, but its body became frozen when the energy leaked out.",
	},

	thirdParty: {
		cardmarket: 289803
	}
}

export default card
