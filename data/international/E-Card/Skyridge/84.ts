import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Max Voltage",
				'de-de': "Höchstspannung"
			},
			effect: {
				'en-us': "Discard all Lightning Energy cards attached to Pikachu. This attack does 20 damage plus 10 more damage for each Energy card discarded in this way.",
				'de-de': "Lege alle an Pikachu angelegten -Energiekarten auf deinen Ablagestapel. Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf diese Weise abgelegte Energiekarte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 88074,
				cardmarket: 275342
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88074,
				cardmarket: 275342
			},
		},
	],
}

export default card
