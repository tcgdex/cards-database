import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
		'de-de': "Ponita"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		77,
	],

	hp: 50,

	types: [
		"Fire",
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
				'en-us': "Discard 1 Energy card attached to Ponyta in order to use this attack.",
				'fr-fr': "Défaussez 1 carte Énergie  attachée à Ponyta pour pouvoir utiliser cette attaque.",
				'de-de': "Discard 1  Energy card attached to Ponyta in order to use this attack."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "A gentle grass-eater, it will allow riders on its back. However, anyone attempting to do so must be careful not to get burned.",
		'fr-fr': "Ce gentil herbivore accepte d'être monté. Toutefois, il faut prendre garde à ne pas se brûler."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274117,
				tcgplayer: 88281
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274117,
				tcgplayer: 88281
			}
		}
	]
}

export default card
