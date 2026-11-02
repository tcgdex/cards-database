import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Paras",
		fr: "Paras",
		de: "Paras"
	},

	illustrator: "OOYAMA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		46,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Whether it's due to a lack of moisture or a lack of nutrients, in Alola the mushrooms on Paras don't grow up quite right.",
		de: "In Alola sind Paras’ Pilze etwas unterentwickelt. Vielleicht mangelt es ihm hier an Feuchtigkeit oder Nährstoffen."
	},

	thirdParty: {
		cardmarket: 394687,
		tcgplayer: 197646
	}
}

export default card
