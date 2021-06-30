import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Crawdaunt",
		fr: "Colhomard",
		es: "Crawdaunt",
		it: "Crawdaunt",
		pt: "Crawdaunt",
		de: "Krebutack"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		342,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Corphish",
		fr: "Écrapince",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Double Claws",
				fr: "Doubles Griffes",
				es: "Dos Pinzas",
				it: "Doppie Chele",
				pt: "Garras Duplas",
				de: "Doppelschere"
			},
			effect: {
				en: "Discard 2 Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez 2 Énergies du Pokémon Actif de votre adversaire.",
				es: "Descarta 2 Energías del Pokémon Activo de tu rival.",
				it: "Scarta due Energie assegnate al Pokémon attivo del tuo avversario.",
				pt: "Descarte 2 Energias do Pokémon Ativo do seu oponente.",
				de: "Lege 2 Energien vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
