import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Golbat"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",
	evolveFrom: {
		en: "Zubat"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Wing Attack"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "Two Diamond",
	boosters: [Mewtwo]
}

export default card
