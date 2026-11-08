import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool",
		'es-es': "Slakoth",
		'it-it': "Slakoth",
		'pt-br': "Slakoth",
		'de-de': "Bummelz"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		287,
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
				"Colorless",
			],
			name: {
				'en-us': "Big Yawn",
				'fr-fr': "Gros Bâillement",
				'es-es': "Gran Bostezo",
				'it-it': "Gransbadiglio",
				'pt-br': "Grande Bocejo",
				'de-de': "Großer Gähner"
			},
			effect: {
				'en-us': "Both Active Pokémon are now Asleep.",
				'fr-fr': "Les deux Pokémon Actifs sont maintenant Endormis.",
				'es-es': "Ambos Pokémon Activos pasan a estar Dormidos.",
				'it-it': "Entrambi i Pokémon attivi vengono addormentati.",
				'pt-br': "Ambos os Pokémon Ativos agora estão Adormecidos.",
				'de-de': "Beide Aktiven Pokémon schlafen jetzt."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The way Slakoth lolls around makes anyone who watches it feel like doing the same.",
	},

	thirdParty: {
		cardmarket: 281745,
		tcgplayer: 92261
	}
}

export default card
