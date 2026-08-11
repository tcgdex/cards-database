import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [115],
	set: Set,

	name: {
		'fr-fr': "Kangourex-ex",
		'en-us': "Kangaskhan ex",
		'es-es': "Kangaskhan ex",
		'it-it': "Kangaskhan-ex",
		'pt-br': "Kangaskhan ex",
		'de-de': "Kangama-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Triple Pioche",
			'en-us': "Triple Draw",
			'es-es': "Triple Robo",
			'it-it': "Pescata Tripla",
			'pt-br': "Compra Tripla",
			'de-de': "Dreifachzug"
		},

		effect: {
			'fr-fr': "Piochez 3 cartes.",
			'en-us': "Draw 3 cards.",
			'es-es': "Roba 3 cartas.",
			'it-it': "Pesca tre carte.",
			'pt-br': "Compre 3 cartas.",
			'de-de': "Ziehe 3 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Coups de Poing Incessants",
			'en-us': "Incessant Punching",
			'es-es': "Puñetazo Incesante",
			'it-it': "Pugni Incessanti",
			'pt-br': "Socos Incessantes",
			'de-de': "Dreschfest"
		},

		effect: {
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			'en-us': "Flip 4 coins. This attack does 100 damage for each heads.",
			'es-es': "Lanza 4 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
		},

		damage: "100×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733710,
				tcgplayer: 516581,
				cardtrader: 261073
			}
		},
	],

	suffix: "ex",
	illustrator: "N-DESIGN Inc.",

	
}

export default card
