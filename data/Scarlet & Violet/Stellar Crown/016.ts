import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Lokix",
		fr: "Gambex",
		es: "Lokix",
		it: "Lokix",
		pt: "Lokix",
		de: "Lextremo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spiral Kick",
			fr: "Coup'd Pied en Spirale",
			es: "Patada Espiral",
			it: "Spiralcalcio",
			pt: "Chute Espiral",
			de: "Drehtritt"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
