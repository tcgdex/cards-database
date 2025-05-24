import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu ex",
		fr: "Pikachu-ex",
		es: "Pikachu ex",
		it: "Pikachu-ex",
		pt: "Pikachu ex",
		de: "Pikachu-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
			es: "Rayo",
			it: "Fulmine",
			pt: "Relâmpago",
			de: "Donnerblitz"
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "takuyoa"
}

export default card