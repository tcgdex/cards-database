import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'es-es': "Snorunt",
		'it-it': "Snorunt",
		'pt-br': "Snorunt",
		'de-de': "Schneppke"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		361,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Icicle",
				'fr-fr': "Concrétion Glacée",
				'es-es': "Témpano",
				'it-it': "Stalattite",
				'pt-br': "Pingente de Gelo",
				'de-de': "Eiszapfen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It feeds mainly on ice and snow. It's only able to survive in a limited number of places in the warm Alola region.",
	},

	thirdParty: {
		cardmarket: 388012,
		tcgplayer: 194958
	}
}

export default card
