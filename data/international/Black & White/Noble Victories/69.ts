import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Mienfoo",
		'fr-fr': "Kungfouine",
		'es-es': "Mienfoo",
		'it-it': "Mienfoo",
		'pt-br': "Mienfoo",
		'de-de': "Lin-Fu"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		619,
	],

	hp: 50,

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
				'en-us': "Pound",
				'fr-fr': "Écras'Face",
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "High Jump Kick",
				'fr-fr': "Pied Voltige",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "In fights, they dominate with onslaughts of flowing, continuous attack. With their sharp claws, they cut enemies.",
	},

	thirdParty: {
		cardmarket: 280192,
		tcgplayer: 87436
	}
}

export default card
