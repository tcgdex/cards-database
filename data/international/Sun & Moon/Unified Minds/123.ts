import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Meloetta",
		'fr-fr': "Meloetta",
		'es-es': "Meloetta",
		'it-it': "Meloetta",
		'pt-br': "Meloetta",
		'de-de': "Meloetta"
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
				'en-us': "Tag Cheer",
				'fr-fr': "Éloges d’Escouade",
				'es-es': "Animación Relevo",
				'it-it': "Incitamento Alleato",
				'pt-br': "Torcida de Aliados",
				'de-de': "Team-Jubel"
			},
			effect: {
				'en-us': "Attach an Energy card from your hand to 1 of your TAG TEAM Pokémon.",
				'fr-fr': "Attachez une carte Énergie de votre main à l’un de vos Pokémon ESCOUADE.",
				'es-es': "Une 1 carta de Energía de tu mano a 1 de tus Pokémon de equipo de RELEVOS.",
				'it-it': "Assegna una carta Energia dalla tua mano a uno dei tuoi Pokémon ALLEATI.",
				'pt-br': "Ligue 1 carta de Energia da sua mão a 1 dos seus Pokémon ALIADOS.",
				'de-de': "Lege 1 Energiekarte aus deiner Hand an 1 deiner TAG TEAM Pokémon an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shooting Star Pirouette",
				'fr-fr': "Pirouette Comète",
				'es-es': "Pirueta de Estrella Fugaz",
				'it-it': "Piroetta Cadente",
				'pt-br': "Pirueta Estrela Cadente",
				'de-de': "Sternschnuppen-Pirouette"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
				'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
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

	description: {
		'en-us': "The melodies sung by Meloetta have the power to make Pokémon that hear them happy or sad.",
	},

	thirdParty: {
		cardmarket: 388417,
		tcgplayer: 195080
	}
}

export default card
