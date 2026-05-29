import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Patrat",
		fr: "Ratentif",
		es: "Patrat",
		it: "Patrat",
		pt: "Patrat",
		de: "Nagelotz"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		504,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hyper Fang",
				fr: "Croc de Mort",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Extremely cautious, they take shifts to maintain a constant watch of their nest. They feel insecure without a lookout.",
	},

	thirdParty: {
		cardmarket: 279816,
		tcgplayer: 87962
	}
}

export default card
