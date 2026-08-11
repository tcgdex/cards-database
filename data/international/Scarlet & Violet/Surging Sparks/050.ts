import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [912],
	set: Set,

	name: {
		'en-us': "Quaxly",
		'fr-fr': "Coiffeton",
		'es-es': "Quaxly",
		'it-it': "Quaxly",
		'pt-br': "Quaxly",
		'de-de': "Kwaks"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

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
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794947,
				tcgplayer: 590031
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794947,
				tcgplayer: 590031
			}
		},
		{
			type: "normal",
			stamp: ["horizons"],
			thirdParty: {
				cardmarket: 794316,
			}
		},
	],

	illustrator: "Saboteri",
	
}

export default card
