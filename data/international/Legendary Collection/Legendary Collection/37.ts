import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Charmeleon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [5],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Charmander"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower"
			},
			effect: {
				'en-us': "Discard 1 Fire Energy card attached to Charmeleon or this attack does nothing."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When it swings its burning tail, it raises the temperature to unbearably high levels."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274802,
				tcgplayer: 84223
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84223,
				cardmarket: 274802
			}
		}
	],

}

export default card
