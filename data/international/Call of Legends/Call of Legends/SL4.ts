import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Groudon",
		'fr-fr': "Groudon",
		'de-de': "Groudon"
	},

	illustrator: "Yuri Umemura",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [383],

	hp: 100,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Volcano Stomp",
				'fr-fr': "Écrasement volcanique",
				'de-de': "Vulkanstampfer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard the top 4 cards of your opponent's deck. If tails, discard the top 4 cards of your deck.",
				'fr-fr': "Lancez une pièce. Si c’est face, défaussez les 4 premières cartes du deck de votre adversaire. Si c’est pile, défaussez les 4 premières cartes de votre deck.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" lege die obersten 4 Karten vom Deck deines Gegners auf seinen Ablagestapel. Bei \"Zahl\" lege die obersten 4 Karten von deinem Deck auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 4,

	description: {
		'en-us': "Said to have expanded the lands by evaporating water with raging heat. It battled titanically with Kyogre.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85926,
				cardmarket: 279649
			},
		},
	],

}

export default card
