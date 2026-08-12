import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Oshawott",
		fr: "Moustillon",
		es: "Oshawott",
		it: "Oshawott",
		pt: "Oshawott",
		de: "Ottaro"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		501,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 10,

		},
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
		en: "The scalchop on its stomach is made from the same elements as claws. It detaches the scalchop for use as a blade.",
		de: "Die Muschel auf seinem Bauch besteht aus demselben Material wie seine Krallen. Nimmt es sie ab, fungiert sie als Klinge."
	},

	thirdParty: {
		cardmarket: 279765,
		tcgplayer: 87890
	}
}

export default card
