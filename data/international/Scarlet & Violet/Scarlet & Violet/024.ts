import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [948],
	set: Set,

	name: {
		'en-us': "Toedscool",
		'fr-fr': "Terracool",
		'es-es': "Toedscool",
		'it-it': "Toedscool",
		'pt-br': "Toedscool",
		'de-de': "Tentagra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Furious Kicks",
			'fr-fr': "Coups de Pied Rageurs",
			'es-es': "Patadas Furiosas",
			'it-it': "Calci Furiosi",
			'pt-br': "Chutes de Fúria",
			'de-de': "Zorntritte"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
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
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Shin Nagasawa",

	description: {
		'en-us': "Though it looks like Tentacool, Toedscool is a completely different species. Its legs may be thin, but it can run at a speed of 30 mph.",
	},

	thirdParty: {
        cardmarket: 702320,
        tcgplayer: 487861
    }
}

export default card