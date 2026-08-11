import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Yumi",
	category: "Pokemon",

	dexId: [126],

	description: {
		'en-us': "When angered, it spouts brilliant fire from all over its body. It doesn’t calm down until its opponent has burned to ash."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Controlled Burn"
		},

		effect: {
			'en-us': "Discard the top card of your opponent’s deck."
		}
	}, {
		name: {
			'en-us': "Flamethrower"
		},

		damage: 80,

		effect: {
			'en-us': "Discard an Energy from this Pokémon."
		}
	}],

	name: {
		'en-us': "Magmar"
	},

	rarity: "None",
	hp: 80,
	types: ["Fire"],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412859,
				tcgplayer: 200963
			}
		}
	]
}

export default card

