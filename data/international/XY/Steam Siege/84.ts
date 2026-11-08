import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Deino",
		'fr-fr': "Solochi",
		'es-es': "Deino",
		'it-it': "Deino",
		'pt-br': "Deino",
		'de-de': "Kapuno"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		633,
	],

	hp: 60,

	types: [
		"Dragon",
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
				'en-us': "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},

		},
		{
			cost: [
				"Psychic",
				"Darkness",
			],
			name: {
				'en-us': "Headbutt Bounce",
				'fr-fr': "Culbute Surprise",
				'es-es': "Bote Cabezazo",
				'it-it': "Rimbalzo Bottintesta",
				'pt-br': "Cabeçada Ricochete",
				'de-de': "Abrupter Kopfstoß"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Lacking sight, it's unaware of its surroundings, so it bumps into things and eats anything that moves.",
	},

	thirdParty: {
		cardmarket: 291645,
		tcgplayer: 121210
	}
}

export default card
