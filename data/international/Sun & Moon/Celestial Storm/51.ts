import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'es-es': "Electrike",
		'it-it': "Electrike",
		'pt-br': "Electrike",
		'de-de': "Frizelbliz"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		309,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Zap Kick",
				'fr-fr': "Coup de Pied Ravageur",
				'es-es': "Electropatada",
				'it-it': "Dinamocalico",
				'pt-br': "Chute Zap",
				'de-de': "Stromtritt"
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

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It stores static electricity in its fur for discharging. It gives off sparks if a storm approaches.",
	},

	thirdParty: {
		cardmarket: 361297,
		tcgplayer: 170870
	}
}

export default card
