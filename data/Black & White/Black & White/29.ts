import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Dewott",
		fr: "Mateloutre",
		es: "Dewott",
		it: "Dewott",
		pt: "Dewott",
		de: "Zwottronin"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		502,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Oshawott",
		fr: "Moustillon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Razor Shell",
				fr: "Coquilame",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 279767
	}
}

export default card
