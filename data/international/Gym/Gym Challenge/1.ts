import { Card } from 'models/database/card'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		'en-us': "Blaine's Arcanine"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [59],

	hp: 90,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Growlithe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Tackle"
			},
			effect: {
				'en-us': "Blaine's Arcanine does 10 damage to itself."
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Firestorm"
			},
			effect: {
				'en-us': "Discard 3 Fire Energy cards attached to Blaine's Arcanine in order to use this attack."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83860,
			},
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83860,
				cardmarket: 274269
			}
		},
	],
}

export default card
