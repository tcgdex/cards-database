import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Carkol",
		fr: "Wagomine",
		es: "Carkol",
		it: "Carkol",
		pt: "Carkol"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Knock Away",
			fr: "Asticotage",
			es: "Derribar",
			it: "Scaraventa",
			pt: "Jogar Longe"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 40 pontos de dano a mais."
		},

		damage: "20+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
			es: "Alud de Rocas",
			it: "Macignata",
			pt: "Rocha Esmagadora"
		},

		damage: 80
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card