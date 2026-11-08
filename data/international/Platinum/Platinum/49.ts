import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Grotle",
		'fr-fr': "Boskara",
		'de-de': "Chelcarain"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [388],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Absorb",
				'fr-fr': "Vol-vie",
				'de-de': "Absorb"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Grotle.",
				'fr-fr': "Retirez à Boskara 1 marqueur de dégât.",
				'de-de': "Remove 1 damage counter from Grotle."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Razor Leaf"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It knows where pure water wells up. It carries fellow Pokémon there on its back."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 85918,
				cardmarket: 278470
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278470,
				tcgplayer: 85918
			}
		}
	],

}

export default card
