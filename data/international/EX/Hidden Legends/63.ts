import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'de-de': "Pummeluff"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [39],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Rollout"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sleepy Song",
				'fr-fr': "Chanson berçante",
				'de-de': "Sleepy Song"
			},
			effect: {
				'en-us': "Each Defending Pokémon is now Asleep.",
				'fr-fr': "Chaque Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Each Defending Pokémon is now Asleep."
			},

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
				tcgplayer: 86315,
				cardmarket: 276137
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86315,
				cardmarket: 276137
			}
		},
	]
}

export default card
