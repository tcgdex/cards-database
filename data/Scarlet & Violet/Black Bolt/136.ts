import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		en: "Krokorok",
		fr: "Escroco",
		de: "Rokkaiman",
		it: "Krokorok",
		pt: "Krokorok",
		es: "Krokorok",
		'es-mx': "Krokorok"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

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

		damage: 40
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card