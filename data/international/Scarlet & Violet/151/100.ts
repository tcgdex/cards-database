import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [100],
	set: Set,

	name: {
		'fr-fr': "Voltorbe",
		'en-us': "Voltorb",
		'es-es': "Voltorb",
		'it-it': "Voltorb",
		'pt-br': "Voltorb",
		'de-de': "Voltobal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Attaque Trébuchante",
			'en-us': "Tumbling Attack",
			'es-es': "Ataque Tambaleante",
			'it-it': "Attacco Capriola",
			'pt-br': "Ataque Cambalhota",
			'de-de': "Taumler"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
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
		'en-us': "It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733695,
				tcgplayer: 516669,
				cardtrader: 261156
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733695,
				tcgplayer: 516669,
				cardtrader: 261156
			}
		},
	],

	illustrator: "nagimiso",

	
}

export default card
