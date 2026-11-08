import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [307],
	set: Set,

	name: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'de-de': "Meditie",
		'it-it': "Meditite",
		'es-es': "Meditite",
		'pt-br': "Meditite",
		'es-mx': "Meditite"
	},


	illustrator: "MINAMINAMI Take",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Steady Punch",
			'fr-fr': "Poing Énergétique",
			'de-de': "Ruhiger Schlag",
			'it-it': "Pugnosecco",
			'es-es': "Puño Firme",
			'pt-br': "Soco Firme",
			'es-mx': "Puño Firme"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825973,
				tcgplayer: 632907
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825973,
				tcgplayer: 632907
			}
		},
	],
}

export default card
