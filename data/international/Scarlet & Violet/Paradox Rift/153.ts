import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [924],
	set: Set,

	name: {
		'en-us': "Tandemaus",
		'fr-fr': "Compagnol",
		'es-es': "Tandemaus",
		'it-it': "Tandemaus",
		'pt-br': "Tandemaus",
		'de-de': "Zwieps"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Damage Rush",
			'fr-fr': "Charge Destructrice",
			'es-es': "Embestida Dañina",
			'it-it': "Sfuriadanni",
			'pt-br': "Fúria Destruidora",
			'de-de': "Schadensrausch"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "The pair sticks together no matter what. They split any food they find exactly in half and then eat it together.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740693,
				tcgplayer: 523834,
				cardtrader: 265278
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740693,
				tcgplayer: 523834,
				cardtrader: 265278
			}
		},
	],

	illustrator: "Shibuzoh.",

	
}

export default card
