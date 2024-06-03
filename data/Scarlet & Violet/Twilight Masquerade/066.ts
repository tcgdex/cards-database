import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Shinx",
		fr: "Lixy",
		es: "Shinx",
		it: "Shinx",
		pt: "Shinx",
		de: "Sheinux"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Curiosity",
			fr: "Curiosité",
			es: "Curiosidad",
			it: "Curiosità",
			pt: "Curiosidade",
			de: "Neugier"
		},

		effect: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire montre sa main.",
			es: "Tu rival enseña las cartas de su mano.",
			it: "Il tuo avversario mostra le carte che ha in mano.",
			pt: "Seu oponente revela a mão dele.",
			de: "Dein Gegner zeigt dir seine Handkarten."
		}
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Static Shock",
			fr: "Choc Statique",
			es: "Impacto Estático",
			it: "Shock Statico",
			pt: "Choque de Estática",
			de: "Statischer Schock"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card