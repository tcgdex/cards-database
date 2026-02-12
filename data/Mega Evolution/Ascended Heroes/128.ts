import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Poochyena",
		fr: "Medhyèna",
		es: "Poochyena",
		'es-mx': "Poochyena",
		de: "Fiffyen",
		it: "Poochyena",
		pt: "Poochyena"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Gnaw Off",
			fr: "Rongement",
			es: "Roer Completamente",
			'es-mx': "Mordisqueo Total",
			de: "Abnagen",
			it: "Rosicchia Via",
			pt: "Corroer"
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

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675940,
		cardmarket: 869739
	}
}

export default card