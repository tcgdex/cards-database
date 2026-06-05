import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [932],
	set: Set,

	name: {
		en: "Nacli",
		fr: "Selutin",
		es: "Nacli",
		it: "Nacli",
		pt: "Nacli",
		de: "Geosali"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
			es: "Lanzarrocas",
			it: "Sassata",
			pt: "Lançamento de Rocha",
			de: "Steinwurf"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Stone Edge",
			fr: "Lame de Roc",
			es: "Roca Afilada",
			it: "Pietrataglio",
			pt: "Gume de Pedra",
			de: "Steinkante"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		en: "It was born in a layer of rock salt deep under the earth. This species was particularly treasured in the old days, as they would share precious salt.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740615,
				tcgplayer: 523771,
				cardtrader: 265209
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740615,
				tcgplayer: 523771,
				cardtrader: 265209
			}
		},
	],

	illustrator: "Mizue",

	
}

export default card
