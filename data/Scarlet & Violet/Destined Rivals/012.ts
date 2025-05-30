import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Gogoat",
		fr: "Chevroum",
		de: "Chevrumm",
		it: "Gogoat",
		es: "Gogoat",
		pt: "Gogoat"
	},

	illustrator: "Gemi",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rising Lunge",
			fr: "Botte Secrète",
			de: "Aufwärtsstoß",
			it: "Elevazione",
			es: "Embestida Ascendente",
			pt: "Investida Ascendente"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais."
		},

		damage: "30+"
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			de: "Solarstrahl",
			it: "Solarraggio",
			es: "Rayo Solar",
			pt: "Raio Solar"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card