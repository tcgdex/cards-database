import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Ponyta",
		fr: "Ponyta",
		de: "Ponita"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [77],

	hp: 40,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
				de: "Glut"
			},
			effect: {
				en: "Discard a Fire Energy card attached to Ponyta.",
				fr: "Défaussez-vous d'une carte Énergie  attachée à Ponyta.",
				de: "Lege 1 an Ponita angelegte -Energiekarte auf deinen Ablagestapel."
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
				tcgplayer: 88283,
				cardmarket: 275177
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88283,
				cardmarket: 275177
			}
		},
	]
}

export default card
