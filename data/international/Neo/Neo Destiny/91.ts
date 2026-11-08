import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'de-de': "Vulpix"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
				'de-de': "Ember"
			},
			effect: {
				'en-us': "Discard 1 Energy card attached to this Pokémon in order to use this attack.",
				'fr-fr': "Défaussez-vous d'une carte Énergie  attachée à Goupix pour pouvoir utiliser cette attaque.",
				'de-de': "Discard 1 Energy card attached to Vulpix in order to use this attack."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "As it grows older, its white tail changes colors and splits into six different tails. Its body radiates a faint warmth.",
		'fr-fr': "Tandis qu'il vieillit, sa queue blanche change de couleur et se sépare en six. Il émane de son corps une faible chaleur."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274743,
				tcgplayer: 90433
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274743,
				tcgplayer: 90433
			}
		}
	]
}

export default card
