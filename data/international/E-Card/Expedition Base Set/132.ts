import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce",
		'de-de': "Schiggy"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [7],

	hp: 40,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Headbutt"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Bubblebeam",
				'fr-fr': "Bulles d'O",
				'de-de': "Bubblebeam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89487,
				cardmarket: 275006
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89487,
				cardmarket: 275006
			},
		},
	],
}

export default card
