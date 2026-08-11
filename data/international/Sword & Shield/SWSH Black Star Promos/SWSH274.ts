import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [408],
	set: Set,

	name: {
		'fr-fr': "Kranidos",
		'de-de': "Koknodon",
		'es-es': "Cranidos",
		'pt-br': "Cranidos",
		'it-it': "Cranidos",
		'en-us': "Cranidos"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'fr-fr': "Fossile Inconnu",
		'de-de': "Unbekanntes Fossil",
		'es-es': "Fósil Desconocido",
		'pt-br': "Fóssil Não Identificado",
		'it-it': "Fossile Sconosciuto",
		'en-us': "Unidentified Fossil"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Collision",
			'de-de': "Ramme",
			'es-es': "Apisonar",
			'pt-br': "Aríete",
			'it-it': "Carica",
			'en-us': "Ram"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'fr-fr': "Lame de Roc",
			'de-de': "Steinkante",
			'es-es': "Roca Afilada",
			'pt-br': "Gume de Pedra",
			'it-it': "Pietrataglio",
			'en-us': "Stone Edge"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			'en-us': "Flip a coin. If heads, this attack does 40 more damage."
		},

		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	description: {
		'en-us': "Its hard skull is its distinguishing feature. It snapped trees by headbutting them, and then it fed on their ripe berries."
	},

	thirdParty: {
		cardmarket: 684386,
		tcgplayer: 454227
	}
}

export default card
