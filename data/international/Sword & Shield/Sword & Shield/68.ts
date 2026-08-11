import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'es-es': "Chinchou",
		'it-it': "Chinchou",
		'pt-br': "Chinchou",
		'de-de': "Lampi"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Luring Glow",
				'fr-fr': "Lueur Attrayante",
				'es-es': "Resplandor Atrayente",
				'it-it': "Brillincanto",
				'pt-br': "Brilho Sedutor",
				'de-de': "Lockendes Glühen"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
				'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Ball",
				'fr-fr': "Boule Éclair",
				'es-es': "Bola Relámpago",
				'it-it': "Fulminpalla",
				'pt-br': "Bola de Raios",
				'de-de': "Kugelblitz"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "Its antennae, which evolved from a fin, have both positive and negative charges flowing through them."
	},

	dexId: [170],

	thirdParty: {
		cardmarket: 436469,
		tcgplayer: 208367
	}
}

export default card
