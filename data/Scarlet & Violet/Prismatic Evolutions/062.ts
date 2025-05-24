import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Houndour",
		fr: "Malosse",
		es: "Houndour",
		pt: "Houndour",
		it: "Houndour",
		de: "Hunduster"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Playful Kick",
			fr: "Coup de Pied de Garnement",
			es: "Patada Juguetona",
			pt: "Chute Brincalhão",
			it: "Calcio Briccone",
			de: "Verspielter Kick"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Mékayu"
}

export default card