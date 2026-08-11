import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
		'es-es': "Jynx",
		'it-it': "Jynx",
		'pt-br': "Jynx",
		'de-de': "Rossana"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dazzle Dance",
				'fr-fr': "Danse Éblouissante",
				'es-es': "Danza Deslumbrante",
				'it-it': "Accecadanza",
				'pt-br': "Dança Fascinante",
				'de-de': "Verwirrender Tanz"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Mysterious Dance",
				'fr-fr': "Danse Mystérieuse",
				'es-es': "Danza Misteriosa",
				'it-it': "Danza Misteriosa",
				'pt-br': "Dança Misteriosa",
				'de-de': "Geheimnisvoller Tanz"
			},
			effect: {
				'en-us': "For each of your opponent’s Benched Pokémon, put 1 damage counter on your opponent’s Pokémon in any way you like.",
				'fr-fr': "Pour chaque Pokémon de Banc de votre adversaire, placez un marqueur de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
				'es-es': "Por cada uno de los Pokémon en Banca de tu rival, pon 1 contador de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Per ogni Pokémon nella panchina del tuo avversario, metti a piacimento un segnalino danno sui suoi Pokémon.",
				'pt-br': "Para cada um dos Pokémon no Banco do seu oponente, coloque 1 contador de dano nos Pokémon do seu oponente como desejar.",
				'de-de': "Lege für jedes Pokémon auf der Bank deines Gegners 1 Schadensmarke beliebig auf die Pokémon deines Gegners."
			},

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
		'en-us': "It sways its hips to a rhythm all its own. The precise movements of Jynx living in Alola are truly wonderful.",
	},

	thirdParty: {
		cardmarket: 368998,
		tcgplayer: 183846
	}
}

export default card
