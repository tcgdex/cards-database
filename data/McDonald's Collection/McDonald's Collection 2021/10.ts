import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Cyndaquil",
		fr: "Héricendre",
		de: "Feurigel"
	},

	illustrator: "kirisAki",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		155,
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
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
				de: "Einhämmern"
			},

			damage: 30,

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
		en: "It has a timid nature. If it is startled, the flames on its back burn more vigorously.",
		de: "Erschrickt sich dieses scheue Pokémon, lodern die Flammen auf seinem Rücken kräftiger."
	},

	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538868,
				tcgplayer: 232325
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538873,
				tcgplayer: 232325
			}
		}
	]
}

export default card

