import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
		es: "Chimchar",
		it: "Chimchar",
		pt: "Chimchar",
		de: "Panflam"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		390,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare",
				fr: "Flamboiement",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It is very agile. Before going to sleep, it extinguishes the flame on its tail to prevent fires.",
	},

	thirdParty: {
		cardmarket: 280755,
		tcgplayer: 84291
	}
}

export default card
