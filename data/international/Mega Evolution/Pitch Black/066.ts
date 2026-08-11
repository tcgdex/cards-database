import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pikipek",
		'fr-fr': "Picassaut",
		'es-es': "Pikipek",
		'es-mx': "Pikipek",
		'de-de': "Peppeck",
		'it-it': "Pikipek",
		'pt-br': "Pikipek"
	},

	illustrator: "Koji Nakata",
	rarity: "Common",
	category: "Pokemon",
	dexId: [731],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Double Stab",
			'fr-fr': "Entaille Double",
			'es-es': "Doble Puñalada",
			'es-mx': "Doble Cuchillada",
			'de-de': "Doppelstich",
			'it-it': "Doppia Pugnalata",
			'pt-br': "Facada Dupla"
		},

		cost: ["Colorless"],

		damage: "10×",

		effect: {
			'en-us': "Flip 2 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895850,
				tcgplayer: 704823
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895850,
				tcgplayer: 704823
			}
		},
	],
}

export default card
