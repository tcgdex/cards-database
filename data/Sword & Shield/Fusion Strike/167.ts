import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [491],
	set: Set,

	name: {
		en: "Darkrai",
		fr: "Darkrai",
		es: "Darkrai",
		it: "Darkrai",
		pt: "Darkrai",
		de: "Darkrai"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Megumi Mizutani",

	description: {
		en: "It can lull people to sleep and make them dream. It is active during nights of the new moon."
	},

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Dark Cutter"
		},

		damage: 90
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card