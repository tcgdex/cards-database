import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [829],
	set: Set,

	name: {
		'en-us': "Gossifleur",
		'fr-fr': "Tournicoton",
		'es-es': "Gossifleur",
		'it-it': "Gossifleur",
		'pt-br': "Gossifleur",
		'de-de': "Cottini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Double Spin",
			'fr-fr': "Double Tour",
			'es-es': "Doble Giro",
			'it-it': "Doppioturbo",
			'pt-br': "Giro Duplo",
			'de-de': "Doppeldreher"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785863,
				tcgplayer: 567236
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785863,
				tcgplayer: 567236
			}
		},
	],

	illustrator: "Heisuke Kitazawa",

}

export default card
