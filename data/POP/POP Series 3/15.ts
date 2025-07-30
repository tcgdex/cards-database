import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Marshtomp",
		fr: "Flobio"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		259,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mudkip",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mud Slap",
				fr: "Coud'boue"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès"
			},
			effect: {
				en: "Marshtomp does 10 damage to itself.",
				fr: "Flobio s'inflige 10 dégâts."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass"
		},
	],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277463,
		tcgplayer: 87236
	}
}

export default card
