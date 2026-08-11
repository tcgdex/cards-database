import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou",
		'de-de': "Kikugi"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [420],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Growth",
				'fr-fr': "Croissance",
				'de-de': "Wachstum"
			},
			effect: {
				'en-us': "Attach a Grass Energy from your hand to Cherubi.",
				'fr-fr': "Attachez une carte Énergie Grass de votre main à Ceribou.",
				'de-de': "Lege 1 -Energiekarte von deiner Hand an Kikugi an."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Rasierblatt"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "The small ball is not only filled with nutrients, it is also tasty. Starly try to peck it off."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84262,
				cardmarket: 278787
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278787,
				tcgplayer: 84262
			}
		},
	],

}

export default card
