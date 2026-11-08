import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'de-de': "Eneco"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [300],

	hp: 60,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Heal Bell",
				'fr-fr': "Glas de soin",
				'de-de': "Heal Bell"
			},
			effect: {
				'en-us': "Remove 1 damage counter from each of your Pokémon.",
				'fr-fr': "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
				'de-de': "Remove 1 damage counter from each of your Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Take Down"
			},
			effect: {
				'en-us': "Skitty does 10 damage to itself.",
				'fr-fr': "Skitty s'inflige 10 dégâts.",
				'de-de': "Skitty does 10 damage to itself."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can't stop itself from chasing moving things, and it runs in a circle, chasing its own tail."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89268,
				cardmarket: 278514
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278514,
				tcgplayer: 89268
			}
		}
	],

}

export default card
