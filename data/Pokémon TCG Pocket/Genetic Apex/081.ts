import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Omanyte"
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Helix Fossil"
	},


	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun"
		},

		damage: "40"
	}],

	retreat: 2,
	rarity: "Two Diamond",
	boosters: [Pikachu]
}

export default card
