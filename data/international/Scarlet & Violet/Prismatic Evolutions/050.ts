import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [447],
	set: Set,

	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'pt-br': "Riolu",
		'it-it': "Riolu",
		'de-de': "Riolu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Quick Attack",
			'fr-fr': "Vive-Attaque",
			'es-es': "Ataque Rápido",
			'pt-br': "Ataque Rápido",
			'it-it': "Attacco Rapido",
			'de-de': "Ruckzuckhieb"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
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
	regulationMark: "H",
	illustrator: "Tika Matsuno",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805439,
				tcgplayer: 610405
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805439,
				tcgplayer: 610405
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806478,
				tcgplayer: 610572
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806479,
				tcgplayer: 610673
			}
		},
	],
}

export default card
