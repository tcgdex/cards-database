import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Herdier",
		fr: "Ponchien",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		507,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Lillipup",
		fr: "Ponchiot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collectionner",
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
