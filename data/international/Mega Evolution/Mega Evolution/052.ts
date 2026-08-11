import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
		'de-de': "Eguana",
		'it-it': "Helioptile",
		'es-es': "Helioptile",
		'pt-br': "Helioptile",
		'es-mx': "Helioptile"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [694],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Double Scratch",
			'fr-fr': "Double Écorchure",
			'de-de': "Doppelkratzer",
			'it-it': "Doppio Graffio",
			'es-es': "Arañazo Doble",
			'pt-br': "Arranhão Duplo",
			'es-mx': "Doble Arañazo"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'es-es': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara."
		},

		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851123,
				tcgplayer: 654391
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851123,
				tcgplayer: 654391
			}
		},
	],
}

export default card
