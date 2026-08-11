import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Grubbin",
		'fr-fr': "Larvibule",
		'es-es': "Grubbin",
		'es-mx': "Grubbin",
		'de-de': "Mabula",
		'it-it': "Grubbin",
		'pt-br': "Grubbin"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [736],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ambush",
			'fr-fr': "Embuscade",
			'es-es': "Emboscada",
			'es-mx': "Emboscada",
			'de-de': "Hinterhalt",
			'it-it': "Imboscata",
			'pt-br': "Emboscada"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It spits sticky threads and winds them around branches, then swings nimbly from tree to tree in a pendulum-like motion.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 869628,
				tcgplayer: 675829
			}
		},
		{
			type: "reverse",
			foil: "quickball",
			thirdParty: {
				cardmarket: 870164,
				tcgplayer: 676866
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870163,
				tcgplayer: 677006
			}
		},
	],
}

export default card
