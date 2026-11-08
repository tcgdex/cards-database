import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Volbeat",
		'fr-fr': "Muciole",
		'es-es': "Volbeat",
		'it-it': "Volbeat",
		'pt-br': "Volbeat",
		'de-de': "Volbeat"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		313,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
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
				'en-us': "Switch 1 of your opponent's Benched Pokémon with your opponent's Active Pokémon.",
				'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire avec le Pokémon Actif de votre adversaire.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon Activo de tu rival.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners aus."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Signal Beam",
				'fr-fr': "Rayon Signal",
				'es-es': "Doble Rayo",
				'it-it': "Segnoraggio",
				'pt-br': "Feixe Sinalizador",
				'de-de': "Ampelleuchte"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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

	retreat: 1,

	description: {
		'en-us': "It communicates with others by lighting up its rear at night. It loves Illumise's sweet aroma.",
	},

	thirdParty: {
		cardmarket: 281345,
		tcgplayer: 90401
	}
}

export default card
