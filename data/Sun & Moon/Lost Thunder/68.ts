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

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		747,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Spike Cannon",
				fr: "Picanon",
				es: "Clavo Cañón",
				it: "Sparalance",
				pt: "Canhão de Espinhos",
				de: "Dornkanone"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365706
	}
}

export default card
