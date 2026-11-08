import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [183],
	set: Set,

	name: {
		'en-us': "Marill",
		'fr-fr': "Marill",
		'es-es': "Marill",
		'it-it': "Marill",
		'pt-br': "Marill",
		'de-de': "Marill"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ball Roll",
			'fr-fr': "Boulé-Roulade",
			'es-es': "Rodabola",
			'it-it': "Rotopalla",
			'pt-br': "Rolo Bola",
			'de-de': "Ballrolle"
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
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'es-es': "Disparo Mágico",
			'it-it': "Magicolpo",
			'pt-br': "Tiro Mágico",
			'de-de': "Magischer Schuss"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "The fur on its body naturally repels water. It can stay dry even when it plays in the water.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760694,
				tcgplayer: 542808
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760694,
				tcgplayer: 542808
			}
		},
	],

	illustrator: "yuu",

}

export default card