import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Murkrow",
		'fr-fr': "Cornebre",
		'de-de': "Kramurx"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [198],

	hp: 70,

	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Glide",
				'fr-fr': "Glissade",
				'de-de': "Gleiten"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Cutter",
				'fr-fr': "Tranch’Obscur",
				'de-de': "Dunkler Zerschneider"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is said that when chased, it lures its attacker onto dark mountain trails where the foe will get lost."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279312,
				tcgplayer: 87656
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279312,
				tcgplayer: 87656
			}
		}
	],

}

export default card
