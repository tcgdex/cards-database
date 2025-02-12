import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Marowak"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Cubone"
	},


	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Bone Beatdown"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "Two Diamond",
	boosters: [Mewtwo]
}

export default card
