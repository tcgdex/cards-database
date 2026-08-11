import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'de-de': "Karpador"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
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
				'en-us': "Flop",
				'fr-fr': "Flop",
				'de-de': "Flop"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Rapid Evolution",
				'fr-fr': "Évolution rapide",
				'de-de': "Rapid Evolution"
			},
			effect: {
				'en-us': "Search your deck for an Evolution card named Gyarados or Dark Gyarados and put it on Magikarp. (This counts as evolving Magikarp.) Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Léviator ou Léviator obscur et placez-la sur Magicarpe. (Cela revient à faire évoluer Magicarpe). Mélangez ensuite votre deck.",
				'de-de': "Search your deck for an Evolution card named Gyarados or Dark Gyarados and put it on Magikarp. (This counts as evolving Magikarp.) Shuffle your deck afterward."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Recent research has revealed the presence of dragon DNA in this species of Pokémon.",
		'fr-fr': "De récentes recherches ont démontré la présence d'ADN de dragon dans cette race de Pokémon."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274100,
				tcgplayer: 87021
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274100,
				tcgplayer: 87021
			}
		}
	]
}

export default card
