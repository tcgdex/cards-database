import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Pidgeot",
		'fr-fr': "Roucarnage",
		'es-es': "Pidgeot",
		'it-it': "Pidgeot",
		'pt-br': "Pidgeot",
		'de-de': "Tauboss"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		18,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Pidgeotto",
		'fr-fr': "Roucoups",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Whirlwind",
				'fr-fr': "Cyclone",
				'es-es': "Remolino",
				'it-it': "Turbine",
				'pt-br': "Ataque de Vento",
				'de-de': "Wirbelwind"
			},
			effect: {
				'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
				'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spin Storm",
				'fr-fr': "Orage Virevoltant",
				'es-es': "Tormenta Giratoria",
				'it-it': "Vortempesta",
				'pt-br': "Tempestade Giratória",
				'de-de': "Sturmwirbel"
			},
			effect: {
				'en-us': "Your opponent puts their Active Pokémon and all cards attached to it into their hand.",
				'fr-fr': "Votre adversaire place son Pokémon Actif et toutes les cartes qui lui sont attachées dans sa main.",
				'es-es': "Tu rival pone su Pokémon Activo y todas las cartas unidas a él en su mano.",
				'it-it': "Il tuo avversario riprende in mano il suo Pokémon attivo e tutte le carte a esso assegnate.",
				'pt-br': "Seu oponente coloca o Pokémon Ativo dele(a) e todas as cartas ligadas a ele na própria mão.",
				'de-de': "Dein Gegner nimmt sein Aktives Pokémon und alle an es angelegten Karten auf seine Hand."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.",
	},

	thirdParty: {
		cardmarket: 369051,
		tcgplayer: 183913
	}
}

export default card
