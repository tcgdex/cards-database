import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [566],
	set: Set,

	name: {
		'en-us': "Archen",
		'fr-fr': "Arkéapti",
		'de-de': "Flapteryx",
		'it-it': "Archen",
		'pt-br': "Archen",
		'es-es': "Archen",
		'es-mx': "Archen"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Antique Plume Fossil",
		'fr-fr': "Fossile Plume Ancien",
		'de-de': "Antikes Federfossil",
		'it-it': "Vecchio Fossilpiuma",
		'pt-br': "Fóssil Pluma Arcaico",
		'es-es': "Fósil Pluma Antiguo",
		'es-mx': "Fósil Pluma Antiguo"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Acrobatics",
			'fr-fr': "Acrobatie",
			'de-de': "Akrobatik",
			'it-it': "Acrobazia",
			'pt-br': "Acrobático",
			'es-es': "Acróbata",
			'es-mx': "Acrobacia"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 30 more damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano a mais para cada cara.",
			'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño más por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 30 puntos de daño más por cada cara."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835993,
				tcgplayer: 642162
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835993,
				tcgplayer: 642162
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836583,
				tcgplayer: 642404
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836584,
				tcgplayer: 642332
			}
		},
	],
}

export default card
