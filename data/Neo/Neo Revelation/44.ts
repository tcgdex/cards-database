import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Geodude",
		fr: "Racaillou",
		de: "Kleinstein"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		74,
	],

	hp: 40,

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
				en: "Knuckle Punch",
				fr: "Coud'phalange",
				de: "Knochenhieb"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Il s'aide de ses bras pour gravir les pentes des montagnes les plus raides. Il fait tourner ses poings s'il est en colère."
	},

	thirdParty: {
		cardmarket: 274630
	}
}

export default card
