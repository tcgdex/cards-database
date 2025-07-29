import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Braviary",
		fr: "Gueriaigle",
		es: "Braviary",
		it: "Braviary",
		pt: "Braviary",
		de: "Washakwil"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		628,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Rufflet",
		fr: "Furaiglon",
		es: "Rufflet",
		it: "Rufflet",
		pt: "Rufflet",
		de: "Geronimatz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-Aile",
				es: "Ataque Ala",
				it: "Attacco d'Ala",
				pt: "Ataque de Asa",
				de: "Flügelschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dual Cut",
				fr: "Coupe Double",
				es: "Corte Dual",
				it: "Doppiotaglio",
				pt: "Cortada Dupla",
				de: "Doppel-Zerschneider"
			},
			effect: {
				en: "Flip 2 coins. This attack does 80 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 80 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 80 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "80×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 286376
	}
}

export default card
