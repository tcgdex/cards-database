import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'de-de': "Lampi"
	},

	illustrator: "Nakaoka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [170],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Random Spark",
				'fr-fr': "Étincelle surprise",
				'de-de': "Random Spark"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de banc.)",
				'de-de': "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Ball",
				'fr-fr': "Boule éclair",
				'de-de': "Lightning Ball"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84304,
				cardmarket: 276131
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84304,
				cardmarket: 276131
			}
		},
	]
}

export default card
