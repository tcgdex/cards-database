import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'de-de': "Barschwa"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		349,
	],

	hp: 30,

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
				'en-us': "Splash",
				'fr-fr': "Trempette",
				'de-de': "Platscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Fast Evolution",
				'fr-fr': "Évolution fulgurante",
				'de-de': "Schnelle Evolution"
			},
			effect: {
				'en-us': "Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Évolution, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Evolutionskarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is famous for its shabby appearance. While populous, they tend to cluster in set locations.",
	},

	thirdParty: {
		cardmarket: 277969,
		tcgplayer: 85404
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
