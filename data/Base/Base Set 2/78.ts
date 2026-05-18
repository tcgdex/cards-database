import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Machop",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		66,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Low Kick",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		en: "Loves to build its muscles. It trains in all styles of martial arts to become even stronger.",
	},

	thirdParty: {
		cardmarket: 274001,
		tcgplayer: 42530
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
