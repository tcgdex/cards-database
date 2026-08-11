import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Treecko",
		'de-de': "Geckarbor"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [252],
	
	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'de-de': "Pfund"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'de-de': "Schlitzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The soles of its feet are covered by countless tiny spikes, enabling it to walk on walls and ceilings."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90042,
				cardmarket: 278950
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278950,
				tcgplayer: 90042
			}
		},
	],

}

export default card
