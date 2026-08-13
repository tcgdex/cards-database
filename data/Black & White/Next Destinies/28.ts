import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Panpour",
		fr: "Flotajou",
		es: "Panpour",
		it: "Panpour",
		pt: "Panpour",
		de: "Sodamak"
	},

	illustrator: "Reiko Tanoue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		515,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
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
		en: "The water stored inside the tuft on its head is full of nutrients. Plants that receive its water grow large.",
		de: "Das Wasser, das es im Büschel auf seinem Kopf sammelt, ist äußerst nahrhaft und verhilft Pflanzen zu großem Wachstum."
	},

	thirdParty: {
		cardmarket: 280253,
		tcgplayer: 87929
	}
}

export default card
