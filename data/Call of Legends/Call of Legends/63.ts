import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Mareep",
		fr: "Wattouat",
		de: "Voltilamm"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [179],

	hp: 40,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Static Shock",
				fr: "Choc statique",
				de: "Statischer Schock"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Its fleece grows continually. In the summer, the fleece is fully shed, but it grows back in a week.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87207,
				cardmarket: 279706
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87207,
				cardmarket: 279706
			},
		},
	],

}

export default card
