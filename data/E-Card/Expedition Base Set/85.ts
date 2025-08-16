import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
		de: "Maschock"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machop",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Punch",
				fr: "Koud'poing",
				de: "Hieb"
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
				en: "Mega Kick",
				fr: "Ultimawashi",
				de: "Megakick"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274960,
		tcgplayer: 86977
	}
}

export default card
