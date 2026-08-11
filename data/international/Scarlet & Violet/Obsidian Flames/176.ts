import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [734],
	set: Set,

	name: {
		'fr-fr': "Manglouton",
		'en-us': "Yungoos",
		'es-es': "Yungoos",
		'it-it': "Yungoos",
		'pt-br': "Yungoos",
		'de-de': "Mangunior"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Asticotage",
			'en-us': "Knock Away",
			'es-es': "Derribar",
			'it-it': "Scaraventa",
			'pt-br': "Jogar Longe",
			'de-de': "Zurückschlagen"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 10 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its stomach fills most of its torso. It wanders the same path every day, searching for fresh food.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725256,
				tcgplayer: 509729,
				cardtrader: 256072
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725256,
				tcgplayer: 509729,
				cardtrader: 256072
			}
		},
	],

	illustrator: "saino misaki",

	
}

export default card
