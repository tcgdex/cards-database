import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Holon's Castform",
		'fr-fr': "Morpheo d'Holon",
		'de-de': "Holon-Formeo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		351,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Delta Draw",
				'fr-fr': "Pioche Delta",
				'de-de': "Delta-Zug"
			},
			effect: {
				'en-us': "Count the number of Pokémon you have in play that has δ on its card. Draw up to that many cards.",
				'fr-fr': "Comptabilisez le nombre de Pokémon possédant le symbole δ que vous avez en jeu. Piochez autant de cartes.",
				'de-de': "Zähle die Anzahl der Pokémon, die du im Spiel hast, auf denen δ zu sehen ist. Ziehe bis zu dieser Anzahl Karten."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277014,
		tcgplayer: 86154
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jun-hasebe"]
		},
		{
			type: "normal",
			stamp: ["tom-roos"]
		},
		{
			type: "normal",
			stamp: ["dylan-lefavour"]
		}
	]
}

export default card
