import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Piloswine",
		fr: "Cochignon",
		es: "Piloswine",
		'es-mx': "Piloswine",
		de: "Keifel",
		it: "Piloswine",
		pt: "Piloswine"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [221],
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rising Lunge",
			fr: "Botte Secrète",
			es: "Embestida Ascendente",
			'es-mx': "Embestida Ascendente",
			de: "Aufwärtsstoß",
			it: "Elevazione",
			pt: "Investida Ascendente"
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

		damage: "30+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Frost Smash",
			fr: "Impact Glacial",
			es: "Golpe Gélido",
			'es-mx': "Golpazo Gélido",
			de: "Frostschlag",
			it: "Gelocolpo",
			pt: "Pancada Congelada"
		},

		damage: 70
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857599
	}
}

export default card