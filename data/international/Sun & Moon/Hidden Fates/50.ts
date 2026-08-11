import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 150,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Incredible Snore",
				fr: "Ronflement Incroyable",
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It doesn't do anything other than eat and sleep. When prompted to make a serious effort, though, it apparently displays awesome power.",
	},

	thirdParty: {
		cardmarket: 396652,
		tcgplayer: 197696
	}
}

export default card
