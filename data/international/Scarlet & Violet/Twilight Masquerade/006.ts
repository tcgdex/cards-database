import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [191],
	set: Set,

	name: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin",
		'es-es': "Sunkern",
		'it-it': "Sunkern",
		'pt-br': "Sunkern",
		'de-de': "Sonnkern"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Bullet Seed",
			'fr-fr': "Balle Graine",
			'es-es': "Semilladora",
			'it-it': "Semitraglia",
			'pt-br': "Projétil de Semente",
			'de-de': "Kugelsaat"
		},

		effect: {
			'en-us': "Flip 4 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 4 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
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

	description: {
		'en-us': "It is very weak. Its only means of defense is to shake its leaves desperately at its attacker.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769180,
				tcgplayer: 550050
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769180,
				tcgplayer: 550050
			}
		},
	],

	illustrator: "Naoyo Kimura",

}

export default card