import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Piplup",
		fr: "Tiplouf",
	},

	illustrator: "Shibuzoh.",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		393,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold."
	},
    variants: [
          {
            type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538968,
				tcgplayer: 232334
			}
          },
          {
            type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538973,
				tcgplayer: 232334
			}
          }
        ]
}

export default card

