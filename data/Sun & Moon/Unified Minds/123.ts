import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Meloetta",
		fr: "Meloetta",
		es: "Meloetta",
		it: "Meloetta",
		pt: "Meloetta",
		de: "Meloetta"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		648,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tag Cheer",
				fr: "Éloges d’Escouade",
				es: "Animación Relevo",
				it: "Incitamento Alleato",
				pt: "Torcida de Aliados",
				de: "Team-Jubel"
			},
			effect: {
				en: "Attach an Energy card from your hand to 1 of your TAG TEAM Pokémon.",
				fr: "Attachez une carte Énergie de votre main à l’un de vos Pokémon ESCOUADE.",
				es: "Une 1 carta de Energía de tu mano a 1 de tus Pokémon de equipo de RELEVOS.",
				it: "Assegna una carta Energia dalla tua mano a uno dei tuoi Pokémon ALLEATI.",
				pt: "Ligue 1 carta de Energia da sua mão a 1 dos seus Pokémon ALIADOS.",
				de: "Lege 1 Energiekarte aus deiner Hand an 1 deiner TAG TEAM Pokémon an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shooting Star Pirouette",
				fr: "Pirouette Comète",
				es: "Pirueta de Estrella Fugaz",
				it: "Piroetta Cadente",
				pt: "Pirueta Estrela Cadente",
				de: "Sternschnuppen-Pirouette"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
				pt: "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
