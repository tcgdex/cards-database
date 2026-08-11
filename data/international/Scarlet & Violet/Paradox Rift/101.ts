import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [932],
	set: Set,

	name: {
		'en-us': "Nacli",
		'fr-fr': "Selutin",
		'es-es': "Nacli",
		'it-it': "Nacli",
		'pt-br': "Nacli",
		'de-de': "Geosali"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Rock Throw",
			'fr-fr': "Jet-Pierres",
			'es-es': "Lanzarrocas",
			'it-it': "Sassata",
			'pt-br': "Lançamento de Rocha",
			'de-de': "Steinwurf"
		},

		damage: 10
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
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It was born in a layer of rock salt deep under the earth. This species was particularly treasured in the old days, as they would share precious salt.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740615,
				tcgplayer: 523771,
				cardtrader: 265209
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740615,
				tcgplayer: 523771,
				cardtrader: 265209
			}
		},
	],

	illustrator: "Mizue",

	
}

export default card
