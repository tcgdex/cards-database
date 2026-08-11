import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'de-de': "Riolu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		447,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Punch",
				'fr-fr': "Koud'poing",
				'de-de': "Boxhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Low Kick",
				'fr-fr': "Balayage",
				'de-de': "Fußkick"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The aura that emanates from its body intensifies to alert others if it is afraid or sad.",
	},

	thirdParty: {
		cardmarket: 278266,
		tcgplayer: 88754
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
