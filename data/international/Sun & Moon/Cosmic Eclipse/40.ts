import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'es-es': "Psyduck",
		'it-it': "Psyduck",
		'pt-br': "Psyduck",
		'de-de': "Enton"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 60,

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
				"Water",
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
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Using psychokinesis gives it a headache, so it normally passes the time spacing out and doing as little as possible.",
	},

	thirdParty: {
		cardmarket: 407849,
		tcgplayer: 201216
	}
}

export default card
