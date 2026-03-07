import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [940],

	name: {
		en: "Iono's Wattrel",
		fr: "Zapétrel de Mashynn",
		es: "Wattrel de e-Nigma",
		'es-mx': "Wattrel de e-Nigma",
		de: "Enigmaras Voltrel",
		it: "Wattrel di Kissara",
		pt: "Wattrel da Kissera"
	},

	illustrator: "mingo",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

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
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 676043,
		cardmarket: 869842
	}
}

export default card
