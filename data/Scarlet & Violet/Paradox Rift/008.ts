import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [761],
	set: Set,

	name: {
		en: "Bounsweet",
		fr: "Croquine",
		es: "Bounsweet",
		it: "Bounsweet",
		pt: "Bounsweet",
		de: "Frubberl"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Quick Blow",
			fr: "Coup d'Poing Éclair",
			es: "Golpe Rápido",
			it: "Colpo Veloce",
			pt: "Golpe Rápido",
			de: "Schnellschlag"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
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
		en: "Its sweat is sweet, like syrup made from boiled- down fruit. Because of this, Bounsweet was highly valued in the past, when sweeteners were scarce.",
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
