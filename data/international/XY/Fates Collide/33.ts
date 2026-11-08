import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Solosis",
		'fr-fr': "Nucléos",
		'es-es': "Solosis",
		'it-it': "Solosis",
		'pt-br': "Solosis",
		'de-de': "Monozyto"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		577,
	],

	hp: 30,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Mini Link",
				'fr-fr': "Mini Lien",
				'es-es': "Miniconexión",
				'it-it': "Minilegame",
				'pt-br': "Miniconexão",
				'de-de': "Miniband"
			},
			effect: {
				'en-us': "If Solosis is on your Bench, this attack does 30 more damage.",
				'fr-fr': "Si Nucléos est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si Solosis está en tu Banca, este ataque hace 30 puntos de daño más.",
				'it-it': "Se Solosis è nella tua panchina, questo attacco infligge 30 danni in più.",
				'pt-br': "Se Solosis estiver no seu Banco, este ataque causará 30 de danos adicionais.",
				'de-de': "Wenn sich Monozyto auf deiner Bank befindet, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "10+",

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
		'en-us': "They drive away attackers by unleashing psychic power. They can use telepathy to talk with others.",
	},

	thirdParty: {
		cardmarket: 289859,
		tcgplayer: 117793
	}
}

export default card
