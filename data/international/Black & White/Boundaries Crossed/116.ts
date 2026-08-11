import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'es-es': "Buneary",
		'it-it': "Buneary",
		'pt-br': "Buneary",
		'de-de': "Haspiror"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		427,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras'Face",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smash Kick",
				'fr-fr': "Coud'Pattes",
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

	retreat: 1,

	description: {
		'en-us': "By extending its rolled up ears and striking the ground, it can bound so high it surprises itself.",
	},

	thirdParty: {
		cardmarket: 280703,
		tcgplayer: 84045
	}
}

export default card
