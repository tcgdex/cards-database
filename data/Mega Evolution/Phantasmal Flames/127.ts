import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Sharpedo ex",
		fr: "Méga-Sharpedo-ex",
		es: "Mega-Sharpedo ex",
		'es-mx': "Mega-Sharpedo ex",
		de: "Mega-Tohaido-ex",
		it: "Mega Sharpedo-ex",
		pt: "Mega Sharpedo ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Greedy Fang",
			fr: "Croc Cupide",
			es: "Colmillo Codicioso",
			'es-mx': "Colmillo Codicioso",
			de: "Gieriges Gebiss",
			it: "Zanna Ingorda",
			pt: "Presa Gananciosa"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			'es-mx': "Roba 2 cartas.",
			de: "Ziehe 2 Karten.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas."
		},

		damage: 70
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Hungry Jaws",
			fr: "Mâchoires Avides",
			es: "Mandíbulas Hambrientas",
			'es-mx': "Mandíbulas Voraces",
			de: "Gefräßiger Schlund",
			it: "Mandibole Affamate",
			pt: "Bocarra Voraz"
		},

		effect: {
			en: "If this Pokémon has any damage counters on it, this attack does 150 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 150 dégâts supplémentaires.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 150 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 150 puntos de daño más.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 150 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 150 danni in più.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 150 pontos de dano a mais."
		},

		damage: "120+"
	}],

	retreat: 0,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857702
	}
}

export default card