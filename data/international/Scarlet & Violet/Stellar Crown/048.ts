import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [170],
	set: Set,

	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'es-es': "Chinchou",
		'it-it': "Chinchou",
		'pt-br': "Chinchou",
		'de-de': "Lampi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Double Voltage",
			'fr-fr': "Double Voltage",
			'es-es': "Doble Tensión",
			'it-it': "Doppio Voltaggio",
			'pt-br': "Voltagem Dupla",
			'de-de': "Doppelspannung"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785902,
				tcgplayer: 567274
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785902,
				tcgplayer: 567274
			}
		},
	],

	illustrator: "Souichirou Gunjima",

}

export default card
