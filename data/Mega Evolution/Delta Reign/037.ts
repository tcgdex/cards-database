import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmi",
		fr: "Pohm",
		de: "Pamo",
		es: "Pawmi",
		it: "Pawmi",
		pt: "Pawmi",
		'es-mx': "Pawmi"
	},

	illustrator: "TOMATO MARKET",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
			de: "Ruckzuckhieb",
			es: "Ataque Rápido",
			it: "Attacco Rapido",
			pt: "Ataque Rápido",
			'es-mx': "Ataque Rápido"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más."
		},

		damage: "10+",
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 727583,
		cardmarket: 918854
	}
}

export default card