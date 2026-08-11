import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Recharge",
				'fr-fr': "Recharge"
			},
			effect: {
				'en-us': "Search your deck for a Energy card and attach it to Pikachu. Shuffle your deck afterward.",
				'fr-fr': "Dans votre deck, cherchez une carte  Energie et attachez-la à Pikachu. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Éclair"
			},
			effect: {
				'en-us': "Discard all Energy cards attached to Pikachu in order to use this attack.",
				'fr-fr': "Défaussez toutes les cartes Énergie attachées à Pikachu pour utiliser cette attaque."
			},
			damage: 50,

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
		'en-us': "When several of these Pokémon gather, they attract so much electricity that they can cause lightning to strike.",
		'fr-fr': "Quand plusieurs de ces Pokémon se réunissent, ils attirent tellement d'électricité qu'ils peuvent provoquer des coups de foudre."
	},

	variants: [
		{
			type: "normal",
			stamp: ["1st-movie-inverted"]
		},
		{
			type: "normal",
			stamp: ["1st-movie"],
			thirdParty: {
				tcgplayer: 88066
			},
		},
		{
			type: "normal",
			stamp: ["pikachu-tail"],
			thirdParty: {
				tcgplayer: 161752
			},
		}
	]
}

export default card
