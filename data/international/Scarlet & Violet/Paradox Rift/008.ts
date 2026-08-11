import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [761],
	set: Set,

	name: {
		'en-us': "Bounsweet",
		'fr-fr': "Croquine",
		'es-es': "Bounsweet",
		'it-it': "Bounsweet",
		'pt-br': "Bounsweet",
		'de-de': "Frubberl"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Quick Blow",
			'fr-fr': "Coup d'Poing Éclair",
			'es-es': "Golpe Rápido",
			'it-it': "Colpo Veloce",
			'pt-br': "Golpe Rápido",
			'de-de': "Schnellschlag"
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
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its sweat is sweet, like syrup made from boiled- down fruit. Because of this, Bounsweet was highly valued in the past, when sweeteners were scarce.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740484,
				tcgplayer: 523607,
				cardtrader: 265006
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740484,
				tcgplayer: 523607,
				cardtrader: 265006
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
