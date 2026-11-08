import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'de-de': "Machollo"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		66,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Low Kick",
				'fr-fr': "Balayage",
				'de-de': "Fußkick"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It hefts a GRAVELER repeatedly to strengthen its entire body. It uses every type of martial arts.",
		'fr-fr': "Il muscle son corps en soulevant régulièrement un Gravalanch. Il est rompu à tous les arts martiaux."
	},

	thirdParty: {
		cardmarket: 277585,
		tcgplayer: 86995
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"]
		}
	]
}

export default card
