import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Teddiursa",
		fr: "Teddiursa",
		es: "Teddiursa",
		it: "Teddiursa",
		pt: "Teddiursa",
		de: "Teddiursa"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		216,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flop",
				fr: "Flop",
				es: "Vuelta",
				it: "Tonfo",
				pt: "Baque",
				de: "Plumps"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Before food becomes scarce in wintertime, its habit is to hoard food in many hidden locations.",
	},

	thirdParty: {
		cardmarket: 286367,
		tcgplayer: 107240
	}
}

export default card
