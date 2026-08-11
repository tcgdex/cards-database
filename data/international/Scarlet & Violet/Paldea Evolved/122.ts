import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [933],
	set: Set,

	name: {
		'fr-fr': "Amassel",
		'en-us': "Naclstack",
		'es-es': "Naclstack",
		'it-it': "Naclstack",
		'pt-br': "Naclstack",
		'de-de': "Sedisal"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Selutin",
		'en-us': "Nacli",
		'es-es': "Nacli",
		'it-it': "Nacli",
		'pt-br': "Nacli",
		'de-de': "Geosali"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'fr-fr': "Canon à Sel",
			'en-us': "Salt Cannon",
			'es-es': "Cañón de Sal",
			'it-it': "Cannone Sparasale",
			'pt-br': "Canhão de Sal",
			'de-de': "Salzkanone"
		},

		effect: {
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
			'en-us': "Flip 3 coins. This attack does 60 damage for each heads.",
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
			type: 'normal',
			thirdParty: {
				cardmarket: 715597,
				tcgplayer: 497537,
				cardtrader: 248769
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715597,
				tcgplayer: 497537,
				cardtrader: 248769
			}
		},
	],

	illustrator: "GIDORA",

	description: {
		'en-us': "This Pokémon dry cures its prey by spraying salt over them. The curing process steals away the water in the prey's body.",
	},
}

export default card
