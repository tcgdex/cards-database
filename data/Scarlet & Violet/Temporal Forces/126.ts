import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [163],
	set: Set,

	name: {
		en: "Hoothoot",
		fr: "Hoothoot",
		es: "Hoothoot",
		it: "Hoothoot",
		pt: "Hoothoot",
		de: "Hoothoot"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Silent Wing",
			fr: "Aile Silencieuse",
			es: "Ala Silenciosa",
			it: "Ala Silenziosa",
			pt: "Asa Silenciosa",
			de: "Lautlose Flügel"
		},

		effect: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire montre sa main.",
			es: "Tu rival enseña las cartas de su mano.",
			it: "Il tuo avversario mostra le carte che ha in mano.",
			pt: "Seu oponente revela a mão dele.",
			de: "Dein Gegner zeigt dir seine Handkarten."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card