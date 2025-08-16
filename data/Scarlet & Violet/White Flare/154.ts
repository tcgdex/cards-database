import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [506],
	set: Set,

	name: {
		en: "Lillipup",
		fr: "Ponchiot",
		de: "Yorkleff",
		it: "Lillipup",
		pt: "Lillipup",
		es: "Lillipup",
		'es-mx': "Lillipup"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Play Rough",
			fr: "Câlinerie",
			de: "Knuddler",
			it: "Carineria",
			pt: "Jogo Duro",
			es: "Carantoña",
			'es-mx': "Juego Rudo"
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

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836036
	}
}

export default card