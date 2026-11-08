import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'de-de': "Mauzi"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pay Day",
				'fr-fr': "Jackpot",
				'de-de': "Zahltag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, draw a card.",
				'fr-fr': "Lancez une pièce. Si c'est face, piochez une carte.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ziehe eine Karte."
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

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.",
		'fr-fr': "Il adore les pièces de monnaie. Il hante les rues à la recherche de pièces oubliées par les passants."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273853,
				tcgplayer: 45159
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273853,
				tcgplayer: 45159
			}
		},
		{
			type: "normal",
			subtype: "gold-border",
		}
	],
}

export default card
