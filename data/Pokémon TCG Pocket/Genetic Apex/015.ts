import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Parasect"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Slash"
		},

		damage: "80"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Paras",
		fr: "Paras",
		es: "Paras",
		it: "Paras",
		pt: "Paras",
		de: "Paras"
	}
}

export default card
