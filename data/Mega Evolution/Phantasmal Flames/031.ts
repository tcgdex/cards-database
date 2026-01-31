import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Boltund",
		fr: "Fulgudog",
		es: "Boltund",
		'es-mx': "Boltund",
		de: "Bellektro",
		it: "Boltund",
		pt: "Boltund"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Stage1",
	dexId: [836],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Electric Run",
			fr: "Course Électrique",
			es: "Escapada Eléctrica",
			'es-mx': "Carrera Eléctrica",
			de: "Elektroflitzer",
			it: "Corsa Elettrica",
			pt: "Corrida Eletrizante"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 70 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 70 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 70 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 70 puntos de daño más.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 70 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 70 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 70 pontos de dano a mais."
		},

		damage: "70+"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857606,
		tcgplayer: 662134
	}
}

export default card