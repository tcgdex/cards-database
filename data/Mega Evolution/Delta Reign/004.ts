import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Cacnea",
		fr: "Cacnea",
		de: "Tuska",
		es: "Cacnea",
		it: "Cacnea",
		pt: "Cacnea",
		'es-mx': "Cacnea"
	},

	illustrator: "Minato",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Knock Away",
			fr: "Asticotage",
			de: "Zurückschlagen",
			es: "Derribar",
			it: "Scaraventa",
			pt: "Jogar Longe",
			'es-mx': "Derribar"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 10 pontos de dano a mais.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más."
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		tcgplayer: 727565,
		cardmarket: 918813
	}
}

export default card