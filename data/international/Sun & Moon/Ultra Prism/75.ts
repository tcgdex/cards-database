import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Stunky",
		'fr-fr': "Moufouette",
		'es-es': "Stunky",
		'it-it': "Stunky",
		'pt-br': "Stunky",
		'de-de': "Skunkapuh"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		434,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Gas Bond",
				'fr-fr': "Liaison de Gaz",
				'es-es': "Mismo Gas",
				'it-it': "Vincolo di Gas",
				'pt-br': "Vínculo Gasoso",
				'de-de': "Gasbund"
			},
			effect: {
				'en-us': "Both Active Pokémon are now Confused.",
				'fr-fr': "Les deux Pokémon Actifs sont maintenant Confus.",
				'es-es': "Ambos Pokémon Activos pasan a estar Confundidos.",
				'it-it': "Entrambi i Pokémon attivi vengono confusi.",
				'pt-br': "Ambos os Pokémon Ativos agora estão Confusos.",
				'de-de': "Beide Aktiven Pokémon sind jetzt verwirrt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It protects itself by spraying a noxious fluid from its rear. The stench lingers for 24 hours.",
	},

	thirdParty: {
		cardmarket: 316003,
		tcgplayer: 157692
	}
}

export default card
