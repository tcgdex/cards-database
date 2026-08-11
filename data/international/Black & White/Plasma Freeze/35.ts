import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'es-es': "Chinchou",
		'it-it': "Chinchou",
		'pt-br': "Chinchou",
		'de-de': "Lampi"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		170,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Static Shock",
				'fr-fr': "Choc Statique",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It discharges positive and negative electricity from its antenna tips to shock its foes.",
	},

	thirdParty: {
		cardmarket: 280913,
		tcgplayer: 84312
	}
}

export default card
