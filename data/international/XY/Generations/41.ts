import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Beatdown",
				fr: "Dérouillée",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.",
	},

	thirdParty: {
		cardmarket: 288479,
		tcgplayer: 113699
	}
}

export default card
