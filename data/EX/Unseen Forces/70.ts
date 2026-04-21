import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
		de: "Pupitar"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Slash"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-pierres",
				de: "Rock Throw"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276716,
		tcgplayer: 88449
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
