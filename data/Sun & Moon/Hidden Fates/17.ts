import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
		de: "Lapras"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Wave",
				fr: "Aqua-Vague",
				de: "Aquawoge"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It likes swimming around with people on its back. In the Alola region, it's an important means of transportation over water.",
		de: "Da es liebend gerne beim Schwimmen Menschen auf seinem Rücken trägt, gilt es in Alola als bedeutendes Transportmittel."
	},

	thirdParty: {
		cardmarket: 394702,
		tcgplayer: 197661
	}
}

export default card
