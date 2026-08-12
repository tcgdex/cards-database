import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Lillipup",
		fr: "Ponchiot",
		es: "Lillipup",
		it: "Lillipup",
		pt: "Lillipup",
		de: "Yorkleff"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		506,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collectionner",
				de: "Sammeln"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				de: "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The long hair around its face provides an amazing radar that lets it sense subtle changes in its surroundings.",
		de: "Das lange Fell um sein Gesicht fungiert als Hightech-Radar, mit dem es fein säuberlich seine Umgebung abtastet."
	},

	thirdParty: {
		cardmarket: 279818,
		tcgplayer: 86798
	}
}

export default card
