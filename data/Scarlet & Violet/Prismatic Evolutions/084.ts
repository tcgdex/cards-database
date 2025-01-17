import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Lopunny",
		fr: "Lockpin",
		es: "Lopunny",
		pt: "Lopunny",
		it: "Lopunny",
		de: "Schlapor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			pt: "Chute Traseiro",
			it: "Retrocalcio",
			de: "Rückwärtskick"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card