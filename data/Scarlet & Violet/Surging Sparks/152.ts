import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [627],
	set: Set,

	name: {
		en: "Rufflet",
		fr: "Furaiglon",
		es: "Rufflet",
		it: "Rufflet",
		pt: "Rufflet",
		de: "Geronimatz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Asa",
			de: "Flattern"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Nakamura Ippan",

	thirdParty: {
		cardmarket: 794525
	}
}

export default card
