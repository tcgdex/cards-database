import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
		'de-de': "Togepi"
	},

	illustrator: "Nakaoka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [175],

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
				tcgplayer: 89932,
				cardmarket: 276152
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89932,
				cardmarket: 276152
			}
		},
	]
}

export default card
