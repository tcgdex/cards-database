import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Torchic",
		fr: "Poussifeu",
	},

	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		255,
	],

	hp: 60,

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
				en: "Ember",
				fr: "Flammèche",
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to this Pokémon.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à ce Pokémon.",
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
		en: "A fire burns inside, so it feels very warm to hug. It launches fireballs of 1,800 degrees Fahrenheit."
	},

	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538878,
				tcgplayer: 232326
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538883,
				tcgplayer: 232326
			}
		}
	]
}

export default card

