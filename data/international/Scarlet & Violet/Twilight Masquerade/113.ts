import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [261],
	set: Set,

	name: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna",
		'es-es': "Poochyena",
		'it-it': "Poochyena",
		'pt-br': "Poochyena",
		'de-de': "Fiffyen"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Continuous Steps",
			'fr-fr': "Pas Continus",
			'es-es': "Pasos Incesantes",
			'it-it': "Passi Regolari",
			'pt-br': "Passos Contínuos",
			'de-de': "Dauerschritte"
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
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Darkness Fang",
			'fr-fr': "Croc Obscur",
			'es-es': "Colmillo de Oscuridad",
			'it-it': "Oscurizanna",
			'pt-br': "Presa Sombria",
			'de-de': "Fänge der Dunkelheit"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Poochyena pursue their prey in packs. Once the prey is exhausted, the pack finishes it off. But sometimes the prey retaliates, and the pack flees.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769287,
				tcgplayer: 550157
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769287,
				tcgplayer: 550157
			}
		},
	],

	illustrator: "Shibuzoh.",

}

export default card