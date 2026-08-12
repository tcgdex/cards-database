import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Panpour",
		fr: "Flotajou",
		es: "Panpour",
		it: "Panpour",
		pt: "Panpour",
		de: "Sodamak"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		515,
	],

	hp: 60,

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
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Aquaknarre"
			},

			damage: 30,

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
		en: "It does not thrive in dry environments. It keeps itself damp by shooting water stored in its head tuft from its tail.",
		de: "Es wringt Wasser aus dem Büschel auf seinem Kopf und bespritzt damit Gegner. Kein Pokémon für trockene Gegenden."
	},

	thirdParty: {
		cardmarket: 279771,
		tcgplayer: 87927
	}
}

export default card
