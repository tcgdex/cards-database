import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Miki Tanaka",
	category: "Pokemon",

	dexId: [56],

	description: {
		'en-us': "It can spontaneously become enraged. Everyone near it clears out as it rampages and the resulting loneliness makes it angrier still."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Three-Step Strike"
		},

		damage: "10×",

		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads."
		}
	}],

	name: {
		'en-us': "Mankey"
	},

	rarity: "None",
	hp: 50,
	types: ["Fighting"],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412884,
				tcgplayer: 200971
			}
		}
	]
}

export default card

