import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [620],
	set: Set,

	name: {
		'en-us': "Mienshao",
		'fr-fr': "Shaofouine",
		'es-es': "Mienshao",
		'it-it': "Mienshao",
		'pt-br': "Mienshao",
		'de-de': "Wie-Shu"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Mienfoo",
		'fr-fr': "Kungfouine",
		'es-es': "Mienfoo",
		'it-it': "Mienfoo",
		'pt-br': "Mienfoo",
		'de-de': "Lin-Fu"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'es-es': "Destructor",
			'it-it': "Botta",
			'pt-br': "Pancada",
			'de-de': "Klaps"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Double Smash",
			'fr-fr': "Double Broiement",
			'es-es': "Golpe Doble",
			'it-it': "Colpo Duplice",
			'pt-br': "Bordoada Dupla",
			'de-de': "Doppelstoß"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 70 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×"
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674117,
				tcgplayer: 283998
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674117,
				tcgplayer: 283998
			}
		},
	],
}

export default card
