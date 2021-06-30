import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Steenee",
		fr: "Candine",
		es: "Steenee",
		it: "Steenee",
		pt: "Steenee",
		de: "Frubaila"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		762,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bounsweet",
		fr: "Croquine",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Slap",
				fr: "Torgnoles",
				es: "Doble Bofetón",
				it: "Doppiasberla",
				pt: "Tapa Duplo",
				de: "Duplexhieb"
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
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leaf Step",
				fr: "Enjambée de Feuillage",
				es: "Paso Hoja",
				it: "Passofoglia",
				pt: "Passo de Folha",
				de: "Blattschritt"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
