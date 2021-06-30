import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Mareanie",
		fr: "Vorastérie",
		es: "Mareanie",
		it: "Mareanie",
		pt: "Mareanie",
		de: "Garstella"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		747,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				es: "Picotazo",
				it: "Beccata",
				pt: "Bicada",
				de: "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Pin Missile",
				fr: "Dard-Nuée",
				es: "Pin Misil",
				it: "Missilspillo",
				pt: "Míssil de Espinhos",
				de: "Nadelrakete"
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
				es: "Lanza 4 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 10 pontos de dano para cada cara.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
			},
			damage: "10×",

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
