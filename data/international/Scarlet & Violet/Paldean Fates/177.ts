import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [933],
	set: Set,

	name: {
		'en-us': "Naclstack",
		'fr-fr': "Amassel",
		'es-es': "Naclstack",
		'it-it': "Naclstack",
		'pt-br': "Naclstack",
		'de-de': "Sedisal"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Nacli",
		'fr-fr': "Selutin",
		'es-es': "Nacli",
		'it-it': "Nacli",
		'pt-br': "Nacli",
		'de-de': "Geosali"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Salt Cannon",
			'fr-fr': "Canon à Sel",
			'es-es': "Cañón de Sal",
			'it-it': "Cannone Sparasale",
			'pt-br': "Canhão de Sal",
			'de-de': "Salzkanone"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 60 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 60 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 60 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
		},

		damage: "60×"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751716,
				tcgplayer: 534921,
				cardtrader: 274362
			}
		},
	],

	illustrator: "otumami",

	description: {
		'en-us': "This Pokémon dry cures its prey by spraying salt over them. The curing process steals away the water in the prey's body.",
	},

}

export default card
