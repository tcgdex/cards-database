import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [736],

	name: {
		en: "Grubbin",
		fr: "Larvibule",
		es: "Grubbin",
		'es-mx': "Grubbin",
		de: "Mabula",
		it: "Grubbin",
		pt: "Grubbin"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ambush",
			fr: "Embuscade",
			es: "Emboscada",
			'es-mx': "Emboscada",
			de: "Hinterhalt",
			it: "Imboscata",
			pt: "Emboscada"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais."
		},

		damage: "10+"
	}],

	retreat: 2,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675829,
		cardmarket: 869628
	}
}

export default card