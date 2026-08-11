import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [148],
	set: Set,

	name: {
		'fr-fr': "Draco",
		'en-us': "Dragonair",
		'es-es': "Dragonair",
		'it-it': "Dragonair",
		'pt-br': "Dragonair",
		'de-de': "Dragonir"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	evolveFrom: {
		'fr-fr': "Minidraco",
		'en-us': "Dratini",
		'es-es': "Dratini",
		'it-it': "Dratini",
		'pt-br': "Dratini",
		'de-de': "Dratini"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Collision",
			'en-us': "Ram",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 30
	}, {
		cost: ["Water", "Lightning"],

		name: {
			'fr-fr': "Draco-Queue",
			'en-us': "Dragon Tail",
			'es-es': "Cola Dragón",
			'it-it': "Codadrago",
			'pt-br': "Cauda do Dragão",
			'de-de': "Drachenrute"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			'en-us': "Flip 2 coins. This attack does 70 damage for each heads.",
			'es-es': "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×"
	}],

	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "They say that if it emits an aura from its whole body, the weather will begin to change instantly.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725238,
				tcgplayer: 509644,
				cardtrader: 255843
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725238,
				tcgplayer: 509644,
				cardtrader: 255843
			}
		},
	],

	illustrator: "Misa Tsutsui",

	
}

export default card
