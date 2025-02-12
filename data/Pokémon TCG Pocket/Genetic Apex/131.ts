import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Kirlia"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Ralts"
	},


	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Smack"
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "Two Diamond",
	boosters: [Mewtwo]
}

export default card
