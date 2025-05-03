import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Vigoroth",
		fr: "Vigoroth",
		es: "Vigoroth",
		it: "Vigoroth",
		pt: "Vigoroth",
		de: "Muntier"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante",
			es: "Garra Cuchillazo",
			it: "Artigli Laceranti",
			pt: "Garra Cortadora",
			de: "Schlitzende Klaue"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
