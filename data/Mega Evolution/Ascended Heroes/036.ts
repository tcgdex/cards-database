import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [813],

	name: {
		en: "Scorbunny",
		fr: "Flambino",
		es: "Scorbunny",
		'es-mx': "Scorbunny",
		de: "Hopplo",
		it: "Scorbunny",
		pt: "Scorbunny"
	},

	illustrator: "Cona Nitanda",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
			es: "Ataque Rápido",
			'es-mx': "Ataque Rápido",
			de: "Ruckzuckhieb",
			it: "Attacco Rapido",
			pt: "Ataque Rápido"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 10 pontos de dano a mais."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675848,
		cardmarket: 869647
	}
}

export default card