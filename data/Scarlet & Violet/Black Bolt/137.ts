import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [553],
	set: Set,

	name: {
		en: "Krookodile",
		fr: "Crocorible",
		de: "Rabigator",
		it: "Krookodile",
		pt: "Krookodile",
		es: "Krookodile",
		'es-mx': "Krookodile"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
		de: "Rokkaiman",
		it: "Krokorok",
		pt: "Krokorok",
		es: "Krokorok",
		"es-mx": "Krokorok"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Tighten Up",
			fr: "Resserrage",
			de: "Zudrücken",
			it: "Torchio",
			pt: "Espremer",
			es: "Apretar",
			'es-mx': "Coerción"
		},

		effect: {
			en: "Your opponent discards 2 cards from their hand.",
			fr: "Votre adversaire défausse 2 cartes de sa main.",
			de: "Dein Gegner legt 2 Karten aus seiner Hand auf seinen Ablagestapel.",
			it: "Il tuo avversario scarta due carte che ha in mano.",
			pt: "Seu oponente descarta 2 cartas da mão dele.",
			es: "Tu rival descarta 2 cartas de su mano.",
			'es-mx': "Tu rival descarta 2 cartas de su mano."
		},

		damage: 60
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Cursed Slug",
			fr: "Frappe Maudite",
			de: "Verfluchter Schlag",
			it: "Pugno Maledetto",
			pt: "Murro Amaldiçoado",
			es: "Puñetazo Maldito",
			'es-mx': "Puñetazo Maldito"
		},

		effect: {
			en: "If your opponent has 3 or fewer cards in their hand, this attack does 120 more damage.",
			fr: "Si votre adversaire a 3 cartes ou moins dans sa main, cette attaque inflige 120 dégâts supplémentaires.",
			de: "Wenn dein Gegner 3 oder weniger Karten auf seiner Hand hat, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Se il tuo avversario ha tre o meno carte in mano, questo attacco infligge 120 danni in più.",
			pt: "Se o seu oponente tiver 3 ou menos cartas na mão dele, este ataque causará 120 pontos de dano a mais.",
			es: "Si tu rival tiene 3 cartas o menos en su mano, este ataque hace 120 puntos de daño más.",
			'es-mx': "Si tu rival tiene 3 cartas o menos en su mano, este ataque hace 120 puntos de daño más."
		},

		damage: "120+"
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836193
	}
}

export default card