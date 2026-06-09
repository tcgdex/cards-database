import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Crabrawler",
		fr: "Crabagarre",
		es: "Crabrawler",
		it: "Crabrawler",
		pt: "Crabrawler",
		de: "Krabbox"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		739,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Jab",
				fr: "Taquet",
				es: "Puya",
				it: "Stoccata",
				pt: "Murro",
				de: "Boxschlag"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Confront",
				fr: "Confrontation",
				es: "Confrontar",
				it: "Confronto",
				pt: "Confrontar",
				de: "Konfrontieren"
			},

			damage: 30,

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
		en: "Its hard pincers are well suited to both offense and defense. Fights between two Crabrawler are like boxing matches.",
	},

	thirdParty: {
		cardmarket: 408254,
		tcgplayer: 201154
	}
}

export default card
