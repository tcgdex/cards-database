import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Rapidash"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Ponyta"
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Fire Mane"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "One Star",
	boosters: [Charizard]
}

export default card
