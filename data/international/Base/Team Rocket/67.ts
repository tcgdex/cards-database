import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'de-de': "Flegmon"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 50,

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
				'en-us': "Afternoon Nap",
				'fr-fr': "Siestre",
				'de-de': "Afernoon Nap"
			},
			effect: {
				'en-us': "Search your deck for a Energy card and attach it to Slowpoke. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Énergie  dans votre deck et attachez-la à Ramoloss. Mélangez ensuite votre deck.",
				'de-de': "Search your deck for a  Energy card and attach it to Slowpoke. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Headbutt"
			},

			damage: 10,

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
		'en-us': "Although it knows how to fish, no other intelligent behavior has been detected in it.",
		'fr-fr': "Bien qu'il sache pêcher, il fait preuve de rès peu d'intelligence."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274120,
				tcgplayer: 89322
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274120,
				tcgplayer: 89322
			}
		}
	]
}

export default card
