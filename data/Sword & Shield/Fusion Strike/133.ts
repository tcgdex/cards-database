import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey",
		de: "Menki"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "sowsow",

	description: {
		en: "If one gets angry, all the others around it will get angry, so silence is a rare visitor in a troop of Mankey."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Scratch"
		},

		damage: 10
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card