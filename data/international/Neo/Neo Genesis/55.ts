import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'de-de': "Lampi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		170,
	],

	hp: 50,

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
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'de-de': "Supersonic"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fleau",
				'de-de': "Flail"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Chinchou.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Loupio.",
				'de-de': "Does 10 damage times the number of damage counters on Chinchou."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It shoots positive and negative electricity between the tips of its two antennae and zaps its enemies.",
		'fr-fr': "Il lance des arcs électriques positifs et négatifs entre ses antennes et électrocute ses ennemis."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274455,
				tcgplayer: 84300
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274455,
				tcgplayer: 84300
			}
		}
	]
}

export default card
