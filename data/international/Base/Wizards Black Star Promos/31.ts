import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Cleffa",
		'fr-fr': "Mélo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
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
				'en-us': "Eek",
				'fr-fr': "Hi !"
			},
			effect: {
				'en-us': "Draw 2 cards",
				'fr-fr': "Piochez 2 cartes."
			},

		},
	],

	description: {
		'en-us': "Because of its unusual, star-like silhouette, people believe that it came here on a meteor.",
		'fr-fr': "À cause de son étrange forme en étoile, les gens pensent qu'il est arrivé ici sur un météore."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84363
			},
		}
	]
}

export default card
