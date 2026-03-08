import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [628],
	set: Set,

	name: {
		en: "Braviary",
		fr: "Gueriaigle",
		de: "Washakwil",
		it: "Braviary",
		pt: "Braviary",
		es: "Braviary",
		'es-mx': "Braviary"
	},

	illustrator: "kamonabe",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	evolveFrom: {
		en: "Rufflet",
		fr: "Furaiglon",
		de: "Geronimatz",
		it: "Rufflet",
		pt: "Rufflet",
		es: "Rufflet",
		'es-mx': "Rufflet"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Aerial Ace",
			fr: "Aéropique",
			de: "Aero-Ass",
			it: "Aeroassalto",
			pt: "Ás dos Ares",
			es: "Golpe Aéreo",
			'es-mx': "As Aéreo"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más."
		},

		damage: "40+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Speed Wing",
			fr: "Ailes Vives",
			de: "Turboschwinge",
			it: "Alaveloce",
			pt: "Asa da Velocidade",
			es: "Ala Veloz",
			'es-mx': "Ala Veloz"
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836229
	}
}

export default card