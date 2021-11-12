import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
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
			en: "Pry"
		},

		damage: 10,

		effect: {
			en: "Your opponent reveals their hand."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card