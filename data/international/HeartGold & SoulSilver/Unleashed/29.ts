import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Dunsparce",
		'fr-fr': "Insolourdo",
		'de-de': "Dummisel"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [206],

	hp: 60,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Return",
				'fr-fr': "Retour",
				'de-de': "Rückkehr"
			},
			effect: {
				'en-us': "Draw cards until you have 6 cards in your hand.",
				'fr-fr': "Piochez jusqu’à ce que vous ayez 6 cartes en main.",
				'de-de': "Ziehe so viele Karten, bis du 6 Karten auf der Hand hast."
			},
			damage: 10,

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
		'en-us': "When spotted, this Pokémon escapes backward by furiously boring into the ground with its tail."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85013,
				cardmarket: 279185
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85013,
				cardmarket: 279185
			}
		},
	],

}

export default card
