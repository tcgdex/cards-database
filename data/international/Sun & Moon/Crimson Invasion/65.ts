import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Aron",
		'fr-fr': "Galekid",
		'es-es': "Aron",
		'it-it': "Aron",
		'pt-br': "Aron",
		'de-de': "Stollunior"
	},

	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		304,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Claw",
				'fr-fr': "Griffe Acier",
				'es-es': "Garra Metal",
				'it-it': "Ferrartigli",
				'pt-br': "Garra de Metal",
				'de-de': "Metallklaue"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It usually lives deep in mountains. However, hunger may drive it to eat railroad tracks and cars.",
	},

	thirdParty: {
		cardmarket: 311913,
		tcgplayer: 149088
	}
}

export default card
