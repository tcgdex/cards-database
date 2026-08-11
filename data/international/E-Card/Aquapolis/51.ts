import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'de-de': "Fukano"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [58],

	hp: 60,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
				'de-de': "Ember"
			},
			effect: {
				'en-us': "Discard a Fire Energy card attached to Growlithe.",
				'fr-fr': "Défaussez-vous d'une carte Énergie  attachée à Caninos.",
				'de-de': "Discard a  Energy card attached to Growlithe."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85949,
				cardmarket: 275124
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85949,
				cardmarket: 275124
			}
		},
	]
}

export default card
