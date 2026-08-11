import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Sentret",
		'fr-fr': "Fouinette",
		'es-es': "Sentret",
		'it-it': "Sentret",
		'pt-br': "Sentret",
		'de-de': "Wiesor"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		161,
	],

	hp: 50,

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
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Smack",
				'fr-fr': "Coup de Queue",
				'es-es': "Bofetón Cola",
				'it-it': "Codasberla",
				'pt-br': "Ataque de Cauda",
				'de-de': "Schweifschlag"
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
		'en-us': "When acting as a lookout, it warns others of danger by screeching and hitting the ground with its tail.",
	},

	thirdParty: {
		cardmarket: 281564,
		tcgplayer: 91218
	}
}

export default card
