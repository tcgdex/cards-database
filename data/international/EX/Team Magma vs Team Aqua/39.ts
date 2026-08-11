import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre",
		'de-de': "Bisasam"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [1],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Growth",
				'fr-fr': "Croissance",
				'de-de': "Growth"
			},
			effect: {
				'en-us': "Attach a Grass Energy card from your hand to Bulbasaur.",
				'fr-fr': "Attachez une carte Énergie  de votre main à Bulbizarre.",
				'de-de': "Attach a  Energy card from your hand to Bulbasaur."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Razor Leaf"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275816,
				tcgplayer: 84028
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275816,
				tcgplayer: 84028
			}
		},
	],

}

export default card
