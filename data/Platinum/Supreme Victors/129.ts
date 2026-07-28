import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Starly",
		fr: "Etourmi",
		de: "Staralilli"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [396],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				de: "Schnabel"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		en: "Because they are weak individually, they form groups. However, they bicker if the group grows too big."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89525,
				cardmarket: 278820
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278820,
				tcgplayer: 89525
			}
		},
	],

}

export default card
