import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Masquerain",
		'fr-fr': "Maskadra",
		'es-es': "Masquerain",
		'it-it': "Masquerain",
		'pt-br': "Masquerain",
		'de-de': "Maskeregen"
	},

	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		284,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Surskit",
		'fr-fr': "Arakdo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Struggle Bug",
				'fr-fr': "Survinsecte",
				'es-es': "Estoicismo",
				'it-it': "Entomoblocco",
				'pt-br': "Ira de Inseto",
				'de-de': "Käfertrutz"
			},
			effect: {
				'en-us': "Move an Energy from your opponent’s Active Pokémon to 1 of their Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie du Pokémon Actif de votre adversaire vers l’un de ses Pokémon de Banc.",
				'es-es': "Mueve 1 Energía del Pokémon Activo de tu rival a 1 de sus Pokémon en Banca.",
				'it-it': "Sposta un’Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
				'pt-br': "Mova 1 Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele(a).",
				'de-de': "Verschiebe 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Its wings and antennae don't cope well with moisture. After a rain, it faces sunward to dry off.",
	},

	thirdParty: {
		cardmarket: 295313,
		tcgplayer: 126879
	}
}

export default card
