import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [75],
	set: Set,

	name: {
		'fr-fr': "Gravalanch",
		'en-us': "Graveler",
		'es-es': "Graveler",
		'it-it': "Graveler",
		'pt-br': "Graveler",
		'de-de': "Georok"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Racaillou",
		'en-us': "Geodude",
		'es-es': "Geodude",
		'it-it': "Geodude",
		'pt-br': "Geodude",
		'de-de': "Kleinstein"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Canon à Pierres",
			'en-us': "Rock Cannon",
			'es-es': "Cañón Roca",
			'it-it': "Rocciocannone",
			'pt-br': "Canhão de Rochas",
			'de-de': "Felskanone"
		},

		effect: {
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 40 dégâts pour chaque côté face.",
			'en-us': "Flip a coin until you get tails. This attack does 40 damage for each heads.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 40 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 40 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 40 pontos de dano para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
		},

		damage: "40×"
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Gros Impact",
			'en-us': "Heavy Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado",
			'de-de': "Schwerer Einschlag"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "It travels by rolling down cliffs. If it falls into a river, it will explode with its last gasp.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733670,
				tcgplayer: 516572,
				cardtrader: 261181
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733670,
				tcgplayer: 516572,
				cardtrader: 261181
			}
		},
	],

	illustrator: "Uta",

	
}

export default card
