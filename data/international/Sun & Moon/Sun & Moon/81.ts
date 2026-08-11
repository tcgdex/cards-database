import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha",
		'es-es': "Carvanha",
		'it-it': "Carvanha",
		'pt-br': "Carvanha",
		'de-de': "Kanivanha"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		318,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gnaw Through",
				'fr-fr': "Grignotage",
				'es-es': "Roedura Perforante",
				'it-it': "Rosicchiadentro",
				'pt-br': "Roída Interrupta",
				'de-de': "Durchnagen"
			},
			effect: {
				'en-us': "Discard all Pokémon Tool cards from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta todas las cartas de Herramienta Pokémon del Pokémon Activo de tu rival.",
				'it-it': "Scarta tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte todas as cartas de Ferramenta Pokémon do Pokémon Ativo do seu oponente.",
				'de-de': "Lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If they scent the faintest trace of blood, they rush to attack en masse. When alone, they're rather cowardly.",
	},

	thirdParty: {
		cardmarket: 295392,
		tcgplayer: 126953
	}
}

export default card
