import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Marshtomp",
		fr: "Flobio",
		es: "Marshtomp",
		it: "Marshtomp",
		pt: "Marshtomp",
		de: "Moorabbel"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		259,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Mudkip",
		fr: "Gobou",
		es: "Mudkip",
		it: "Mudkip",
		pt: "Mudkip",
		de: "Hydropi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Mud-Slap",
				fr: "Coud'Boue",
				es: "Bofetón Lodo",
				it: "Fangosberla",
				pt: "Tapa de Lama",
				de: "Lehmschelle"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Endeavor",
				fr: "Effort",
				es: "Esfuerzo",
				it: "Rimonta",
				pt: "Esforço",
				de: "Notsituation"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue 2 moedas. Esse ataque causa 20 de danos adicionais para cada cara.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 273565
	}
}

export default card
