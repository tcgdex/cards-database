import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Stonjourner",
		fr: "Dolman",
		es: "Stonjourner",
		it: "Stonjourner",
		pt: "Stonjourner",
		de: "Humanolith"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
			es: "Lanzarrocas",
			it: "Sassata",
			pt: "Lançamento de Rocha",
			de: "Steinwurf"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Mystery Press",
			fr: "Pression Mystère",
			es: "Presión Misteriosa",
			it: "Pressa Mistero",
			pt: "Compressão Misteriosa",
			de: "Geheimnisvoller Druck"
		},

		effect: {
			en: "If you have no Supporter cards in your discard pile, this attack does 130 more damage.",
			fr: "Si vous n'avez aucune carte Supporter dans votre pile de défausse, cette attaque inflige 130 dégâts supplémentaires.",
			es: "Si no tienes ninguna carta de Partidario en tu pila de descartes, este ataque hace 130 puntos de daño más.",
			it: "Se non hai carte Aiuto nella tua pila degli scarti, questo attacco infligge 130 danni in più.",
			pt: "Se você não tiver cartas de Apoiador na sua pilha de descarte, este ataque causará 130 pontos de dano a mais.",
			de: "Wenn du keine Unterstützerkarten in deinem Ablagestapel hast, fügt diese Attacke 130 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card