import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorina"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Stage1",
	evolveFrom: {
		en: "Nidoran♀"
	},


	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bite"
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "Two Diamond",
	boosters: [Pikachu]
}

export default card
