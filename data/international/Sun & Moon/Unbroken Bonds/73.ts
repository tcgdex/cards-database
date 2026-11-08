import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Koffing",
		'fr-fr': "Smogo",
		'es-es': "Koffing",
		'it-it': "Koffing",
		'pt-br': "Koffing",
		'de-de': "Smogon"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		109,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Foul Odor",
				'fr-fr': "Odeur Fétide",
				'es-es': "Olor Pestilente",
				'it-it': "Puzza",
				'pt-br': "Odor Sujo",
				'de-de': "Fäulnisgeruch"
			},
			effect: {
				'en-us': "Both Active Pokémon are now Confused.",
				'fr-fr': "Les deux Pokémon Actifs sont maintenant Confus.",
				'es-es': "Ambos Pokémon Activos pasan a estar Confundidos.",
				'it-it': "Entrambi i Pokémon attivi vengono confusi.",
				'pt-br': "Ambos os Pokémon Ativos agora estão Confusos.",
				'de-de': "Beide Aktiven Pokémon sind jetzt verwirrt."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its thin, balloon-like body is inflated by horribly toxic gases. It reeks when it is nearby.",
	},

	thirdParty: {
		cardmarket: 372361,
		tcgplayer: 189173
	}
}

export default card
