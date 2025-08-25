import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [515],
	set: Set,

	name: {
		en: "Panpour",
		fr: "Flotajou",
		es: "Panpour",
		it: "Panpour",
		pt: "Panpour",
		de: "Sodamak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Sekio",

	description: {
		en: "The water stored inside the tuft on its head is full of nutrients. Plants that receive its water grow large."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Pry",
			fr: "Fouineur",
			de: "Herumschnuppern",
			es: "Fisgonear",
			pt: "Bisbilhotar",
			it: "Impiccione"
		},

		damage: 10,

		effect: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire dévoile sa main.",
			de: "Dein Gegner zeigt dir seine Handkarten.",
			es: "Tu rival enseña las cartas de su mano.",
			pt: "Seu oponente revela a própria mão.",
			it: "Il tuo avversario mostra le carte che ha in mano."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582202,
		tcgplayer: 253211
	}
}

export default card