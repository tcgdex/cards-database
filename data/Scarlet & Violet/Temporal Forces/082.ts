import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Meditite",
		fr: "Méditikka",
		es: "Meditite",
		it: "Meditite",
		pt: "Meditite"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Slap",
			fr: "Gifle",
			es: "Bofetón",
			it: "Sberla",
			pt: "Tapa"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Kick",
			fr: "Koud'Pied",
			es: "Patada",
			it: "Calcio",
			pt: "Chute"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card