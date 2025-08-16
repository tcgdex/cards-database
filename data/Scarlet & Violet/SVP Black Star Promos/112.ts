import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [625],
	set: Set,

	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Cut",
			fr: "Coupe",
			es: "Corte",
			it: "Taglio",
			pt: "Cortar",
			de: "Zerschneider"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "AKIRA EGAWA"
}

export default card