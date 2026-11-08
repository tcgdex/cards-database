import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Lumineon",
		'fr-fr': "Luminéon",
		'es-es': "Lumineon",
		'it-it': "Lumineon",
		'pt-br': "Lumineon",
		'de-de': "Lumineon"
	},

	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		457,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Finneon",
		'fr-fr': "Écayon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Neon Trickery",
				'fr-fr': "Supercherie Néon",
				'es-es': "Truco Neón",
				'it-it': "Neon Birichino",
				'pt-br': "Truques Neon",
				'de-de': "Neontrickserei"
			},
			effect: {
				'en-us': "You may move an Energy from your opponent’s Active Pokémon to 1 of their Benched Pokémon.",
				'fr-fr': "Vous pouvez déplacer une Énergie du Pokémon Actif de votre adversaire vers l’un de ses Pokémon de Banc.",
				'es-es': "Puedes mover 1 Energía del Pokémon Activo de tu rival a 1 de sus Pokémon en Banca.",
				'it-it': "Puoi spostare un’Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
				'pt-br': "Você pode mover 1 Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele(a).",
				'de-de': "Du kannst 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank verschieben."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Deep down at the bottom of the ocean, prey is scarce. Lumineon get into fierce disputes with Lanturn over food.",
	},

	thirdParty: {
		cardmarket: 388027,
		tcgplayer: 194961
	}
}

export default card
