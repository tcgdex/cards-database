import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Lucario V",
		fr: "Lucario V",
		es: "Lucario V",
		it: "Lucario V",
		pt: "Lucario V",
		de: "Lucario V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "aky CG Works",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Aura Sphere"
		},

		damage: 120
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
