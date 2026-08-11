import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 60,

	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'en-us': "Charge",
			},
			effect: {
				'en-us': "Search your deck for a Basic Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck."
			}
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				'en-us': "Pika Punch",
			},
			damage: 50,
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
			type: 'holo',
			thirdParty: {
				cardmarket: 802824,
				tcgplayer: 614371
			}
		}
	]
}

export default card

