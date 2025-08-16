import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Pidgeot",
		fr: "Roucarnage",
		es: "Pidgeot",
		it: "Pidgeot",
		pt: "Pidgeot",
		de: "Tauboss"
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
		en: "Pidgeotto",
		fr: "Roucoups",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone",
				es: "Remolino",
				it: "Turbine",
				pt: "Ataque de Vento",
				de: "Wirbelwind"
			},
			effect: {
				en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
				pt: "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
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
				en: "Spin Storm",
				fr: "Orage Virevoltant",
				es: "Tormenta Giratoria",
				it: "Vortempesta",
				pt: "Tempestade Giratória",
				de: "Sturmwirbel"
			},
			effect: {
				en: "Your opponent puts their Active Pokémon and all cards attached to it into their hand.",
				fr: "Votre adversaire place son Pokémon Actif et toutes les cartes qui lui sont attachées dans sa main.",
				es: "Tu rival pone su Pokémon Activo y todas las cartas unidas a él en su mano.",
				it: "Il tuo avversario riprende in mano il suo Pokémon attivo e tutte le carte a esso assegnate.",
				pt: "Seu oponente coloca o Pokémon Ativo dele(a) e todas as cartas ligadas a ele na própria mão.",
				de: "Dein Gegner nimmt sein Aktives Pokémon und alle an es angelegten Karten auf seine Hand."
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

	thirdParty: {
		cardmarket: 369050,
		tcgplayer: 183913
	}
}

export default card
