import { Card } from 'models/database/card'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		'en-us': "Entei",
		'fr-fr': "Entei"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [244],

	hp: 70,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stomp",
				'fr-fr': "Écrasement"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Spin",
				'fr-fr': "Danseflamme"
			},
			effect: {
				'en-us': "Discard 2 Basic Energy cards attached to Entei or this attack does nothing.",
				'fr-fr': "Défaussez 2 cartes Énergie de base attachées à Entei ou cette attaque est sans effet."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85271,
				cardmarket: 277432
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85271,
				cardmarket: 277432
			},
		},
	],

}

export default card
