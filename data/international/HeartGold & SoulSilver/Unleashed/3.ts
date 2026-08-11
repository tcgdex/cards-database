import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Manaphy",
		'fr-fr': "Manaphy",
		'de-de': "Manaphy"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [490],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Deep Sea Swirl",
				'fr-fr': "Remous abyssal",
				'de-de': "Tiefseewirbel"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 5 cards.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe danach 5 Karten."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse vague",
				'de-de': "Wellenplatscher"
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

	retreat: 0,

	description: {
		'en-us': "It starts its life with a wondrous power that permits it to bond with any kind of Pokémon."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87148,
				cardmarket: 279159
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87148,
				cardmarket: 279159
			}
		},
	],

}

export default card
