import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Hariyama",
		'fr-fr': "Hariyama",
		'es-es': "Hariyama",
		'it-it': "Hariyama",
		'pt-br': "Hariyama",
		'de-de': "Hariyama"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		297,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Push Out",
				'fr-fr': "Expulsion",
				'es-es': "Expulsar",
				'it-it': "Spingi Fuori",
				'pt-br': "Expulsar",
				'de-de': "Verdrängen"
			},
			effect: {
				'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Megaton Slap Push",
				'fr-fr': "Grande Claque Titanesque",
				'es-es': "Bofetada Empujón Megatón",
				'it-it': "Spintonata Megatonica",
				'pt-br': "Tapa Empurrão Megaton",
				'de-de': "Megatonnenstoß"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It is known for its fantastic strength, but as it grows older, it focuses more on training Makuhita.",
	},

	thirdParty: {
		cardmarket: 295379,
		tcgplayer: 126939
	}
}

export default card
