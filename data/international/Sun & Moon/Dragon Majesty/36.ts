import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
		'es-es': "Dragonair",
		'it-it': "Dragonair",
		'pt-br': "Dragonair",
		'de-de': "Dragonir"
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
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
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
				'en-us': "Dragon Tail",
				'fr-fr': "Draco-Queue",
				'es-es': "Cola Dragón",
				'it-it': "Codadrago",
				'pt-br': "Cauda do Dragão",
				'de-de': "Drachenrute"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 60 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 60 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
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
				'en-us': "Waterfall",
				'fr-fr': "Cascade",
				'es-es': "Cascada",
				'it-it': "Cascata",
				'pt-br': "Cachoeira",
				'de-de': "Kaskade"
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

	description: {
		'en-us': "From time immemorial, it has been venerated by agricultural peoples as an entity able to control the weather.",
	},

	thirdParty: {
		cardmarket: 363508,
		tcgplayer: 175441
	}
}

export default card
