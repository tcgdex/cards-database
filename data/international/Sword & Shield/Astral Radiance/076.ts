import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [408],
	set: Set,

	name: {
		'en-us': "Cranidos",
		'fr-fr': "Kranidos",
		'es-es': "Cranidos",
		'it-it': "Cranidos",
		'pt-br': "Cranidos",
		'de-de': "Koknodon"
	},

	illustrator: "Hataya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Unidentified Fossil",
		'fr-fr': "Fossile Inconnu",
		'es-es': "Fósil Desconocido",
		'it-it': "Fossile Sconosciuto",
		'pt-br': "Fóssil Não Identificado",
		'de-de': "Unbekanntes Fossil"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Stone Edge",
			'fr-fr': "Lame de Roc",
			'es-es': "Roca Afilada",
			'it-it': "Pietrataglio",
			'pt-br': "Gume de Pedra",
			'de-de': "Steinkante"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu."
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
		'en-us': "Its hard skull is its distinguishing feature. It snapped trees by headbutting them, and then it fed on their ripe berries.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658674,
				tcgplayer: 272277
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658674,
				tcgplayer: 272277
			}
		},
	],
}

export default card
