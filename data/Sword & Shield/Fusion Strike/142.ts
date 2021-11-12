import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Makuhita",
		fr: "Makuhita",
		es: "Makuhita",
		it: "Makuhita",
		pt: "Makuhita",
		de: "Makuhita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Oswaldo KATO",

	description: {
		en: "There's a rumor of a traditional recipe for stew that Trainers can use to raise strong Makuhita."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Lunge Out"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Hammer In"
		},

		damage: 60
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card