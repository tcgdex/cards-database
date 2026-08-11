import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [736],
	set: Set,

	name: {
		'en-us': "Grubbin",
		'fr-fr': "Larvibule",
		'es-es': "Grubbin",
		'it-it': "Grubbin",
		'pt-br': "Grubbin",
		'de-de': "Mabula"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ambush",
			'fr-fr': "Embuscade",
			'es-es': "Emboscada",
			'it-it': "Imboscata",
			'pt-br': "Emboscada",
			'de-de': "Hinterhalt"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785862,
				tcgplayer: 567235
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785862,
				tcgplayer: 567235
			}
		},
	],

	illustrator: "Jerky",

}

export default card
