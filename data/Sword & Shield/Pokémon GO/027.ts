import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Buddy Bolt",
			fr: "Éclair Partenaire",
			es: "Rayo Amigo",
			it: "Lampo Amico",
			pt: "Raio Companheiro",
			de: "Kumpel-Blitz"
		},

		effect: {
			en: "If you played a Supporter card from your hand during this turn, this attack does 30 more damage.",
			fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 30 puntos de daño más.",
			it: "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 30 danni in più.",
			pt: "Se você jogou 1 carta de Apoiador da sua mão durante este turno, este ataque causará 30 pontos de dano a mais.",
			de: "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 664566
	}
}

export default card