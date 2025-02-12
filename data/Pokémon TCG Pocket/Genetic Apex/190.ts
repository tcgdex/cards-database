import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard, Mewtwo, Pikachu } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Raticate"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Rattata"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Bite"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Mewtwo, Charizard, Pikachu]
}

export default card
