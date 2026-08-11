import { Card } from 'models/database/card'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		'en-us': "Heatran",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		485,
	],

	hp: 100,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Spin",
			},
			effect: {
				'en-us': "Discard 2 basic Energy cards attached to Heatran. (If you can’t discard cards, this attack does nothing.)",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	description: {
		'en-us': "It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls."
	},

	retreat: 3,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278402,
				tcgplayer: 86049
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 278402,
				tcgplayer: 86049
			}
		},
	],
}

export default card
