import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Manectric",
		'de-de': "Voltenso"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [310],

	hp: 90,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Electrike"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'de-de': "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Head Bolt",
				'de-de': "Kopf-Blitz"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		'en-us': "It discharges electricity from its mane. It creates a thundercloud overhead to drop lightning bolts."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87164,
				cardmarket: 278894
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278894,
				tcgplayer: 87164
			}
		},
	],

	retreat: 0
}

export default card
