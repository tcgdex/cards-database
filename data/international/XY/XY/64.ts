import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Solrock",
		'fr-fr': "Solaroc",
		'es-es': "Solrock",
		'it-it': "Solrock",
		'pt-br': "Solrock",
		'de-de': "Sonnfel"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		338,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cosmic Spin",
				'fr-fr': "Pirouette Cosmique",
				'es-es': "Giro Cósmico",
				'it-it': "Cosmogiro",
				'pt-br': "Giro Cósmico",
				'de-de': "Kosmischer Dreher"
			},
			effect: {
				'en-us': "If Lunatone is on your Bench, this attack does 30 more damage.",
				'fr-fr': "Si Séléroc est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si Lunatone está en tu Banca, este ataque hace 30 puntos de daño más.",
				'it-it': "Se Lunatone è nella tua panchina, questo attacco infligge 30 danni in più.",
				'pt-br': "Se Lunatone estiver em seu Banco, esse ataque causará 30 de danos adicionais.",
				'de-de': "Wenn sich Lunastein auf deiner Bank befindet, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Solar Beam",
				'fr-fr': "Lance-Soleil",
				'es-es': "Rayo Solar",
				'it-it': "Solarraggio",
				'pt-br': "Raio Solar",
				'de-de': "Solarstrahl"
			},

			damage: 60,

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
		'en-us': "Solar energy is the source of its power, so it is strong during the daytime. When it spins, its body shines.",
	},

	thirdParty: {
		cardmarket: 281401,
		tcgplayer: 89432
	}
}

export default card
