import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Ivysaur"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Bulbasaur"
	}, 

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Razor Leaf"
		},

		damage: "60"
	}],

	retreat: 2,
	rarity: "Two Diamond",
	boosters: [Mewtwo]
}

export default card
