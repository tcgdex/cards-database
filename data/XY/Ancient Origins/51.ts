import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Registeel",
		fr: "Registeel",
		es: "Registeel",
		it: "Registeel",
		pt: "Registeel",
		de: "Registeel"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		379,
	],
	hp: 120,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Iron Head",
				fr: "Tête de Fer",
				es: "Cabeza de Hierro",
				it: "Metaltestata",
				pt: "Cabeça de Ferro",
				de: "Eisenschädel"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue uma moeda até sair coroa. Este ataque causa 30 de danos vezes o número de caras.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Forbidden Iron Hammer",
				fr: "Marteau de Fer Défendu",
				es: "Martillo de Hierro Prohibido",
				it: "Fantamartello Metallico",
				pt: "Martelo de Ferro Proibido",
				de: "Verbotener Stahlhammer"
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon-EX, discard an Energy attached to that Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, défaussez une Énergie lui étant attachée.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon-EX, descarta 1 Energía unida a ese Pokémon.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, scarta un'Energia assegnata a quel Pokémon.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, descarte uma Energia ligada a aquele Pokémon.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, lege 1 an das Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
