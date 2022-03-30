import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Illumise",
		fr: "Lumivole",
		es: "Illumise",
		it: "Illumise",
		pt: "Illumise",
		de: "Illumise"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		314,
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
				en: "Helping Hand",
				fr: "Coup d'Main",
				es: "Refuerzo",
				it: "Altruismo",
				pt: "Mãozinha",
				de: "Rechte Hand"
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to 1 of your Benched Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à l'un de vos Pokémon de Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Básica y únela a 1 de tus Pokémon en Banca. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo una carta Energia base e assegnala a uno dei tuoi Pokémon in panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho um card de Energia básica e ligue-o a 1 dos seus Pokémon no Banco. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach 1 Basis-Energiekarte und lege sie an 1 Pokémon auf deiner Bank an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Twirling Sign",
				fr: "Signe Virevoltant",
				es: "Señal Pirueta",
				it: "Segnale Roteante",
				pt: "Sinal Espiral",
				de: "Kreiselndes Schild"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 10,

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
