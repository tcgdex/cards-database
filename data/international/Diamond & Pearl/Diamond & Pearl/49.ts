import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Grotle",
		'fr-fr': "Boskara",
		'de-de': "Chelcarain"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		388,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Synthesis",
				'fr-fr': "Synthèse",
				'de-de': "Synthese"
			},
			effect: {
				'en-us': "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie Grass, et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer -Energiekarte und lege sie an 1 deiner Pokémon an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cut",
				'fr-fr': "Coupe",
				'de-de': "Zerschneider"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It lives along water in forests. In the daytime, it leaves the forest to sunbathe its treed shell.",
		'fr-fr': "Il vit en forêt près de l'eau. En journée, il la quitte pour dorer sa carapace feuillue au soleil."
	},

	thirdParty: {
		cardmarket: 277548,
		tcgplayer: 85916
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
