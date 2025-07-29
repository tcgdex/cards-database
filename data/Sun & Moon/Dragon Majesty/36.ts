import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Dragonair",
		fr: "Draco",
		es: "Dragonair",
		it: "Dragonair",
		pt: "Dragonair",
		de: "Dragonir"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 100,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Tail",
				fr: "Draco-Queue",
				es: "Cola Dragón",
				it: "Codadrago",
				pt: "Cauda do Dragão",
				de: "Drachenrute"
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 60 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
			},
			damage: "60×",

		},
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
				es: "Cascada",
				it: "Cascata",
				pt: "Cachoeira",
				de: "Kaskade"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 363508
	}
}

export default card
