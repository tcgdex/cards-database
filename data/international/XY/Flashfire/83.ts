import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Miltank",
		'fr-fr': "Écrémeuh",
		'es-es': "Miltank",
		'it-it': "Miltank",
		'pt-br': "Miltank",
		'de-de': "Miltank"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		241,
	],

	hp: 100,

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
				'en-us': "Powerful Friends",
				'fr-fr': "Force de l'Amitié",
				'es-es': "Amigos Poderosos",
				'it-it': "Spallecoperte",
				'pt-br': "Amigos Poderosos",
				'de-de': "Einflussreiche Freunde"
			},
			effect: {
				'en-us': "If you have any Stage 2 Pokémon on your Bench, this attack does 70 more damage.",
				'fr-fr': "Si vous avez un Pokémon de Niveau 2 sur votre Banc, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si tienes algún Pokémon de Fase 2 en tu Banca, este ataque hace 70 puntos de daño más.",
				'it-it': "Se hai dei Pokémon di Fase 2 in panchina, questo attacco infligge 70 danni in più.",
				'pt-br': "Se você tiver qualquer Pokémon Estágio 2 no Banco, este ataque causará 70 de danos adicionais.",
				'de-de': "Wenn du mindestens 1 Phase-2-Pokémon auf deiner Bank hast, fügt dieser Angriff 70 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncement",
				'es-es': "Martillear",
				'it-it': "Martello",
				'pt-br': "Martelada",
				'de-de': "Einhämmern"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If it is around babies, the milk it produces contains much more nutrition than usual.",
	},

	thirdParty: {
		cardmarket: 281566,
		tcgplayer: 91220
	}
}

export default card
