import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Drowzee",
		fr: "Soporifik",
		es: "Drowzee",
		it: "Drowzee",
		pt: "Drowzee",
		de: "Traumato"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Eerie Gaze",
			fr: "Regard Étrange",
			es: "Mirada Inquietante",
			it: "Sguardo Inquietante",
			pt: "Olhar Perturbador",
			de: "Unheimlicher Blick"
		},

		effect: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire montre sa main.",
			es: "Tu rival enseña las cartas de su mano.",
			it: "Il tuo avversario mostra le carte che ha in mano.",
			pt: "Seu oponente revela a mão dele.",
			de: "Dein Gegner zeigt dir seine Handkarten."
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card