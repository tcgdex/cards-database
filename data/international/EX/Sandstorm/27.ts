import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Anorith",
		'fr-fr': "Anorith",
		'de-de': "Anorith"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [347],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Claw Fossil",
		'fr-fr': "Fossile griffe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fast Evolution",
				'fr-fr': "Évolution fulgurante",
				'de-de': "Fast Evolution"
			},
			effect: {
				'en-us': "Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Évolution, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Pierce",
				'fr-fr': "Transpercer",
				'de-de': "Pierce"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275804,
				tcgplayer: 83557
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275804,
				tcgplayer: 83557
			}
		},
	],

}

export default card
