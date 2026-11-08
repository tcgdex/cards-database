import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		731,
	],
	set: Set,
	name: {
		'en-us': "Pikipek",
		'fr-fr': "Picassaut",
	},
	rarity: "None",
	category: "Pokemon",
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
				'en-us': "Rock Smash",
				'fr-fr': "Éclate-Roc",
			},
			damage: "10+",
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			},
		},
	],

	illustrator: "Shin Nagasawa",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301853,
				tcgplayer: 152692
			}
		}
	]
}

export default card

