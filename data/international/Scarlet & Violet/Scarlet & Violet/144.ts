import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [113],
	set: Set,

	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'pt-br': "Chansey",
		'de-de': "Chaneira"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'es-es': "Destructor",
			'it-it': "Botta",
			'pt-br': "Pancada",
			'de-de': "Klaps"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Egg Rolling",
			'fr-fr': "Œuf Roulant",
			'es-es': "Huevo Rodante",
			'it-it': "Rotoluova",
			'pt-br': "Rolando Ovos",
			'de-de': "Eierkullern"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 60 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 60 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 60 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 60 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 60 pontos de dano para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
		},

		damage: "60×"
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
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "sui",

	description: {
		'en-us': "It walks carefully to prevent its egg from breaking. However, it is extremely fast at running away.",
	},

	thirdParty: {
        cardmarket: 702440,
        tcgplayer: 488031
    }
}

export default card