import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino",
		'es-es': "Nidorino",
		'it-it': "Nidorino",
		'pt-br': "Nidorino",
		'de-de': "Nidorino"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		33,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidoran♂",
		'fr-fr': "Nidoran♂",
		'es-es': "Nidoran♂",
		'it-it': "Nidoran♂",
		'pt-br': "Nidoran♂",
		'de-de': "Nidoran♂"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'es-es': "Picotazo",
				'it-it': "Beccata",
				'pt-br': "Bicada",
				'de-de': "Schnabel"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Nido Press",
				'fr-fr': "Charge Nido",
				'es-es': "Presión Nido",
				'it-it': "Nidopressa",
				'pt-br': "Aperto do Nido",
				'de-de': "Nidodruck"
			},
			effect: {
				'en-us': "If Nidorina is on your Bench, this attack does 40 more damage.",
				'fr-fr': "Si Nidorina est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Si Nidorina está en tu Banca, este ataque hace 40 puntos de daño más.",
				'it-it': "Se Nidorina è nella tua panchina, questo attacco infligge 40 danni in più.",
				'pt-br': "Se Nidorina estiver no seu Banco, este ataque causará 40 de danos adicionais.",
				'de-de': "Wenn sich Nidorina auf deiner Bank befindet, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "40+",

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
		'en-us': "An aggressive Pokémon that is quick to attack. The horn on its head secretes a powerful venom.",
	},

	thirdParty: {
		cardmarket: 291620,
		tcgplayer: 121133
	}
}

export default card
