import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'de-de': "Schneppke"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		361,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Snowball",
				'fr-fr': "Boule de neige",
				'de-de': "Schneeball"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "In the snow country, certain folklore says a house will prosper if a SNORUNT lives there.",
		'fr-fr': "Selon un vieux dicton des régions enneigées : \"Stalgamin dans la maison, richesse à l'horizon\"."
	},

	thirdParty: {
		cardmarket: 277729,
		tcgplayer: 89402
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
