import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-Edge",
				'fr-fr': "Damoclès",
			},
			effect: {
				'en-us': "This Pokémon does 20 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 20 dégâts.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It seems that other Pokémon's efforts to take its delicious, nutritious egg away from it caused Chansey to get faster at fleeing.",
	},

	thirdParty: {
		cardmarket: 394712,
		tcgplayer: 197691
	}
}

export default card
