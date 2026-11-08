import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Treecko",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		252,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pound",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sporadic Sponging",
			},
			effect: {
				'en-us': "Flip a coin. If heads, remove 1 damage counter from Treecko.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	
	variants: [
		{
			type: 'normal',
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				tcgplayer: 153317
			}
		}
	]
}

export default card
