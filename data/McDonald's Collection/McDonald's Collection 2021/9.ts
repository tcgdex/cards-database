import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Charmander",
		fr: "Salamèche",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 70,

	types: [
		"Fire",
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
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flame Tail",
				fr: "Queue de Flammes",
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
		en: "The flame on its tail indicates Charmander’s life force. If it is healthy, the flame burns brightly."
	},

	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538858,
				tcgplayer: 232324
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538863,
				tcgplayer: 232324
			}
		}
	]
}

export default card

