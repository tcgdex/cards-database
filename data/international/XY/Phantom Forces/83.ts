import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Whismur",
		'fr-fr': "Chuchmur",
		'es-es': "Whismur",
		'it-it': "Whismur",
		'pt-br': "Whismur",
		'de-de': "Flurmel"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		293,
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
				'en-us': "Screaming Fit",
				'fr-fr': "Piquage de Crise",
				'es-es': "Berrinche",
				'it-it': "Capricci Sonori",
				'pt-br': "Ataque Apavorante",
				'de-de': "Schreianfall"
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
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It usually murmurs but starts crying loudly if it senses danger. It stops when its ear covers are shut.",
	},

	thirdParty: {
		cardmarket: 281889,
		tcgplayer: 94651
	}
}

export default card
