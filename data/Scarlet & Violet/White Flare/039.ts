import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [562],
	set: Set,

	name: {
		en: "Yamask",
		fr: "Tutafeh",
		de: "Makabaja",
		it: "Yamask",
		pt: "Yamask",
		es: "Yamask",
		'es-mx': "Yamask"
	},

	illustrator: "Bun Toujo",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Focused Wish",
			fr: "Vœu Fervent",
			de: "Gezielter Wunsch",
			it: "Intensiderio",
			pt: "Desejo Direcionado",
			es: "Intenso Deseo",
			'es-mx': "Deseo Enfocado"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más."
		},

		damage: "20+"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835974
	}
}

export default card