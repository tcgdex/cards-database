import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [940],
	set: Set,

	name: {
		'en-us': "Wattrel",
		'fr-fr': "Zapétrel",
		'es-es': "Wattrel",
		'it-it': "Wattrel",
		'pt-br': "Wattrel",
		'de-de': "Voltrel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Aerial Ace",
			'fr-fr': "Aéropique",
			'es-es': "Golpe Aéreo",
			'it-it': "Aeroassalto",
			'pt-br': "Ás dos Ares",
			'de-de': "Aero-Ass"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794347,
				tcgplayer: 590094
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794347,
				tcgplayer: 590094
			}
		},
	],

	illustrator: "Pani Kobayashi",
	
}

export default card
