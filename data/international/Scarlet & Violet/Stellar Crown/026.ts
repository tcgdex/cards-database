import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [813],
	set: Set,

	name: {
		'en-us': "Scorbunny",
		'fr-fr': "Flambino",
		'es-es': "Scorbunny",
		'it-it': "Scorbunny",
		'pt-br': "Scorbunny",
		'de-de': "Hopplo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Quick Attack",
			'fr-fr': "Vive-Attaque",
			'es-es': "Ataque Rápido",
			'it-it': "Attacco Rapido",
			'pt-br': "Ataque Rápido",
			'de-de': "Ruckzuckhieb"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 10 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785879,
				tcgplayer: 567252
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785879,
				tcgplayer: 567252
			}
		},
	],

	illustrator: "Cona Nitanda",

}

export default card
