import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Emboar EX",
		'fr-fr': "Roitiflam EX",
		'es-es': "Emboar EX",
		'it-it': "Emboar EX",
		'pt-br': "Emboar EX",
		'de-de': "Flambirex EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		500,
	],

	hp: 180,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Punch",
				'fr-fr': "Coup d'Poing Spirale",
				'es-es': "Puño en Espiral",
				'it-it': "Spiralpugno",
				'pt-br': "Soco Espiral",
				'de-de': "Spiralschlag"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño más por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 20 de danos adicionais para cada cara.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strong Flare",
				'fr-fr': "Flamboiement Intense",
				'es-es': "Fuerte Llama",
				'it-it': "Vampata Potente",
				'pt-br': "Labareda Forte",
				'de-de': "Großes Auflodern"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies attachées à ce Pokémon.",
				'es-es': "Descarta 2 Energías unidas a este Pokémon.",
				'it-it': "Scarta due Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias ligadas a este Pokémon.",
				'de-de': "Lege 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 288189,
		tcgplayer: 111517
	}
}

export default card
