import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Carvanha",
		fr: "Carvanha",
		es: "Carvanha",
		it: "Carvanha",
		pt: "Carvanha",
		de: "Kanivanha"
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
				en: "Gnaw Through",
				fr: "Grignotage",
				es: "Roedura Perforante",
				it: "Rosicchiadentro",
				pt: "Roída Interrupta",
				de: "Durchnagen"
			},
			effect: {
				en: "Discard all Pokémon Tool cards from your opponent’s Active Pokémon.",
				fr: "Défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire.",
				es: "Descarta todas las cartas de Herramienta Pokémon del Pokémon Activo de tu rival.",
				it: "Scarta tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario.",
				pt: "Descarte todas as cartas de Ferramenta Pokémon do Pokémon Ativo do seu oponente.",
				de: "Lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
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



}

export default card
