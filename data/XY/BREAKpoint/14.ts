import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Emboar EX",
		fr: "Roitiflam EX",
		es: "Emboar EX",
		it: "Emboar EX",
		pt: "Emboar EX",
		de: "Flambirex EX"
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
				en: "Spiral Punch",
				fr: "Coup d'Poing Spirale",
				es: "Puño en Espiral",
				it: "Spiralpugno",
				pt: "Soco Espiral",
				de: "Spiralschlag"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño más por cada cara.",
				it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue uma moeda até sair coroa. Este ataque causa 20 de danos adicionais para cada cara.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
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
				en: "Strong Flare",
				fr: "Flamboiement Intense",
				es: "Fuerte Llama",
				it: "Vampata Potente",
				pt: "Labareda Forte",
				de: "Großes Auflodern"
			},
			effect: {
				en: "Discard 2 Energy attached to this Pokémon.",
				fr: "Défaussez 2 Énergies attachées à ce Pokémon.",
				es: "Descarta 2 Energías unidas a este Pokémon.",
				it: "Scarta due Energie assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias ligadas a este Pokémon.",
				de: "Lege 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
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
		cardmarket: 288189
	}
}

export default card
