import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'de-de': "Vulpix"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [37],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Scratch"
			},

			damage: 10,

		},
		{
			name: {
				'en-us': "Ascension",
				'fr-fr': "Ascension",
				'de-de': "Ascension"
			},

			effect: {
				'en-us': "Search your deck for a card that evolves from Vulpix and put it on Vulpix. (This counts as evolving Vulpix.) Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte qui évolue de Goupix et placez-la sur Goupix. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a card that evolves from Vulpix and put it on Vulpix. (This counts as evolving Vulpix.) Shuffle your deck afterward."
			},

			cost: ["Fire"]
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90437,
				cardmarket: 276155
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90437,
				cardmarket: 276155
			}
		},
	]
}

export default card
