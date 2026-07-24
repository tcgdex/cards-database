import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Remoraid",
		fr: "Héricendre",
		de: "Feurigel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [223],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Splatter",
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
				en: "Discard a Energy card attached to Cyndaquil.",
				fr: "Défaussez-vous d'une carte Énergie  attachée à Héricendre.",
				de: "Lege 1 an Feurigel angelegte -Energiekarte auf deinen Ablagestapel."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84548,
				cardmarket: 274979
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
