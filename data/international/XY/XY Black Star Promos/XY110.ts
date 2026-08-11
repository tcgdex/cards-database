import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Mew",
		'fr-fr': "Mew",
	},

	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Clairvoyance",
				'fr-fr': "Voyance",
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand.",
				'fr-fr': "Votre adversaire montre sa main.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its DNA is said to contain the genetic codes of all Pokémon, so it can use all kinds of techniques.",
	},

	thirdParty: {
		cardmarket: 288632
	}
}

export default card
