import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Scorbunny",
		'fr-fr': "Flambino",
		'es-es': "Scorbunny",
		'es-mx': "Scorbunny",
		'de-de': "Hopplo",
		'it-it': "Scorbunny",
		'pt-br': "Scorbunny"
	},

	illustrator: "Yuu Nishida",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [813],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Quick Attack",
			'fr-fr': "Vive-Attaque",
			'es-es': "Ataque Rápido",
			'es-mx': "Ataque Rápido",
			'de-de': "Ruckzuckhieb",
			'it-it': "Attacco Rapido",
			'pt-br': "Ataque Rápido"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 10 pontos de dano a mais."
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

	description: {
		'en-us': "Fire energy gathers in the pads of its feet, raising their temperature. Once hot, Scorbunny’s footpads can deal heavy damage to opponents.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869836,
				tcgplayer: 676037
			}
		}
	],
}

export default card
