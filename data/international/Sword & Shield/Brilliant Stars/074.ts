import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [328],
	set: Set,

	name: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix",
		'es-es': "Trapinch",
		'it-it': "Trapinch",
		'pt-br': "Trapinch",
		'de-de': "Knacklion"
	},

	illustrator: "zig",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Rising Lunge",
			'fr-fr': "Botte Secrète",
			'es-es': "Embestida Ascendente",
			'it-it': "Elevazione",
			'pt-br': "Investida Ascendente",
			'de-de': "Aufwärtsstoß"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 10 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Its nest is a sloped, bowl-like pit in the desert. Once something has fallen in, there is no escape.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608524,
				tcgplayer: 263790
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608524,
				tcgplayer: 263790
			}
		},
	],
}

export default card
