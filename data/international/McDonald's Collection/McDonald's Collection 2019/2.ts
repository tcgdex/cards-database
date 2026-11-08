import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Satoshi Shirai",
	category: "Pokemon",

	dexId: [103],

	description: {
		'en-us': "As it grew taller and taller, it outgrew its reliance on psychic powers, while within it awakened the power of the sleeping dragon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Tropical Shake"
		},

		damage: "20+",

		effect: {
			'en-us': "This attack does 20 more damage for each type of basic Energy card in your discard pile. You can’t add more than 100 damage in this way."
		}
	}],

	name: {
		'en-us': "Alolan Exeggutor"
	},

	rarity: "None",
	hp: 160,
	types: ["Grass"],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	retreat: 3,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412854,
				tcgplayer: 200961
			}
		}
	]
}

export default card

