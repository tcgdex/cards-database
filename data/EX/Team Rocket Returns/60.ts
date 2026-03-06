import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Houndour",
		de: "Hunduster"
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
				en: "Dark Lift",
				de: "Dark Lift"
			},
			effect: {
				en: "If Houndour has any Fighting Energy attached to it, the Retreat Cost for Houndour is 0.\"",
				de: "If Houndour has any  Energy attached to it, the Retreat Cost for Houdour is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Firebreathing",
				de: "Firebreathing"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				de: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage."
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

	thirdParty: {
		cardmarket: 276351,
		tcgplayer: 86226
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

