import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Snorlax VMAX",
		'fr-fr': "Ronflex VMAX",
		'es-es': "Snorlax VMAX",
		'it-it': "Snorlax VMAX",
		'pt-br': "Snorlax VMAX",
		'de-de': "Relaxo VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,
	hp: 340,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Snorlax V",
		'fr-fr': "Ronflex-V",
		'es-es': "Snorlax V",
		'it-it': "Snorlax V",
		'pt-br': "Snorlax V",
		'de-de': "Relaxo V"
	},

	stage: "VMAX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "G-Max Fall",
				'fr-fr': "Chute G-Max",
				'es-es': "Gigadesplome",
				'it-it': "Gigacaduta",
				'pt-br': "Queda G-Max",
				'de-de': "Giga-Sturz"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each of your Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada uno de tus Pokémon en Banca.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Pokémon nella tua panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Pokémon no seu Banco.",
				'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank 30 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	dexId: [143],

	thirdParty: {
		cardmarket: 437119,
		tcgplayer: 208459
	}
}

export default card
