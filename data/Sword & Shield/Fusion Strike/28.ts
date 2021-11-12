import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Vulpix",
		fr: "Goupix",
		es: "Vulpix",
		it: "Vulpix",
		pt: "Vulpix",
		de: "Vulpix"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Sekio",

	description: {
		en: "As each tail grows, its fur becomes more lustrous. When held, it feels slightly warm."
	},

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Live Coal"
		},

		damage: 30
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card