import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [193],
	set: Set,

	name: {
		en: "Yanma",
		fr: "Yanma",
		de: "Yanma",
		es: "Yanma",
		it: "Yanma",
		pt: "Yanma"
	},

	illustrator: "Dsuke",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Silent Wing",
			fr: "Aile Silencieuse",
			de: "Lautlose Flügel",
			es: "Ala Silenciosa",
			it: "Ala Silenziosa",
			pt: "Asa Silenciosa"
		},

		effect: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire montre sa main.",
			de: "Dein Gegner zeigt dir seine Handkarten.",
			es: "Tu rival enseña las cartas de su mano.",
			it: "Il tuo avversario mostra le carte che ha in mano.",
			pt: "Seu oponente revela a mão dele."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card