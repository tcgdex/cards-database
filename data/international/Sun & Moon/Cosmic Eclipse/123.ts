import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
		'es-es': "Rockruff",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'de-de': "Wuffels"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		744,
	],

	hp: 60,

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
				'en-us': "Roar",
				'fr-fr': "Hurlement",
				'es-es': "Rugido",
				'it-it': "Boato",
				'pt-br': "Rugido",
				'de-de': "Brüller"
			},
			effect: {
				'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
				'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Throw",
				'fr-fr': "Jet-Pierres",
				'es-es': "Lanzarrocas",
				'it-it': "Sassata",
				'pt-br': "Lançamento de Rocha",
				'de-de': "Steinwurf"
			},

			damage: 40,

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
		'en-us': "As they develop, their disposition grows more violent and aggressive. Many Trainers find them too much to handle and abandon them.",
	},

	thirdParty: {
		cardmarket: 408264,
		tcgplayer: 201158
	}
}

export default card
