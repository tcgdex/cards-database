import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Gulpin",
		'de-de': "Schluppuck"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [316],
	
	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw a card.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Drool",
				'de-de': "Sabbern"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Almost all of its body is its stomach. Its harsh digestive juices quickly dissolve anything it swallows."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85979,
				cardmarket: 278912
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278912,
				tcgplayer: 85979
			}
		},
	],

}

export default card
