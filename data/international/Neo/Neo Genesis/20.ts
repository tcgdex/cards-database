import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Cleffa",
		'fr-fr': "Mélo",
		'de-de': "Pii"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		173,
	],

	hp: 30,

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
				'en-us': "Eeeeeeek",
				'fr-fr': "Arheuuuuu",
				'de-de': "Piiiiiiieps"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck, then draw 7 cards.",
				'fr-fr': "Mélangez votre main avec votre deck, piochez ensuite 7 cartes.",
				'de-de': "Mische deine Hand in dein Deck, und ziehe dann 7 Karten."
			},

		},
	],

	description: {
		'en-us': "Because of its unusual, star-like silhouette, people believe that it came here on a meteor.",
		'fr-fr': "En raison de sa forme en étoile, les gens pensent qu'il est arrivé ici sur un météore."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274420,
				tcgplayer: 84362
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274420,
				tcgplayer: 84362
			}
		}
	]
}

export default card
