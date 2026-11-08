import { Card } from 'models/database/card'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 40,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Hypnotic Gaze",
				'fr-fr': "Regard Hypnotique",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Tail Whap",
				'fr-fr': "Queue Battoir",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is called the \"Mirage Pokémon\" because so few have seen it. Its shed skin has been found.",
	},

	thirdParty: {
		cardmarket: 281001,
		tcgplayer: 84938
	}
}

export default card
