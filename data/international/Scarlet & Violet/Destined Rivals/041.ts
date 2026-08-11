import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [256],
	set: Set,

	name: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
		'de-de': "Jungglut",
		'it-it': "Combusken",
		'es-es': "Combusken",
		'pt-br': "Combusken",
		'es-mx': "Combusken"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu",
		'de-de': "Flemmli",
		'it-it': "Torchic",
		'es-es': "Torchic",
		'pt-br': "Torchic",
		'es-mx': "Torchic"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'de-de': "Glühen",
			'it-it': "Fuoco Continuo",
			'es-es': "Combustión",
			'pt-br': "Combustão",
			'es-mx': "Combustión"
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Double Kick",
			'fr-fr': "Double Pied",
			'de-de': "Doppelkick",
			'it-it': "Doppiocalcio",
			'es-es': "Doble Patada",
			'pt-br': "Chute Duplo",
			'es-mx': "Doble Patada"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 40 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			'es-es': "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara."
		},

		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825915,
				tcgplayer: 632860
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825915,
				tcgplayer: 632860
			}
		},
	],
}

export default card
