import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Turtwig",
		fr: "Tortipouss",
		de: "Chelast"
	},

	illustrator: "OOYAMA",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		387,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
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
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'Herbe",
				de: "Rasierblatt"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],

	retreat: 2,

	description: {
		en: "It undertakes photosynthesis with its body, making oxygen. The leaf on its head wilts if it is thirsty.",
		de: "Sein Körper lebt von der Photosynthese, die Sauerstoff freisetzt. Ist es durstig, welkt sein Blatt."
	},

	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538808,
				tcgplayer: 232319
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538813,
				tcgplayer: 232319
			}
		}
	]
}

export default card

