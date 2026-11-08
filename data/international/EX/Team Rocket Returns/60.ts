import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Houndour",
		'de-de': "Hunduster"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		228,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dark Lift",
				'de-de': "Dark Lift"
			},
			effect: {
				'en-us': "If Houndour has any Fighting Energy attached to it, the Retreat Cost for Houndour is 0.\"",
				'de-de': "If Houndour has any  Energy attached to it, the Retreat Cost for Houdour is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Firebreathing",
				'de-de': "Firebreathing"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276352,
				tcgplayer: 86226
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276352,
				tcgplayer: 86226
			},
		},
	],

}

export default card

