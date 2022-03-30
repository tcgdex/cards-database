import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Volbeat",
		fr: "Muciole",
		es: "Volbeat",
		it: "Volbeat",
		pt: "Volbeat",
		de: "Volbeat"
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
				en: "Luring Glow",
				fr: "Lueur Attrayante",
				es: "Resplandor Atrayente",
				it: "Brillincanto",
				pt: "Brilho Sedutor",
				de: "Lockendes Glühen"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with your opponent's Active Pokémon.",
				fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec le Pokémon Actif de votre adversaire.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon Activo de tu rival.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners aus."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Signal Beam",
				fr: "Rayon Signal",
				es: "Doble Rayo",
				it: "Segnoraggio",
				pt: "Feixe Sinalizador",
				de: "Ampelleuchte"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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



}

export default card
