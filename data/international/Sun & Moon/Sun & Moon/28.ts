import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'es-es': "Psyduck",
		'it-it': "Psyduck",
		'pt-br': "Psyduck",
		'de-de': "Enton"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Confusion Wave",
				'fr-fr': "Vague de Confusion",
				'es-es': "Ola de Confusión",
				'it-it': "Confusionda",
				'pt-br': "Onda de Confusão",
				'de-de': "Verwirrende Welle"
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
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "As a result of headaches so fierce they cause it to cry, it sometimes uses psychokinesis without meaning to.",
	},

	thirdParty: {
		cardmarket: 295338,
		tcgplayer: 126899
	}
}

export default card
