import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Haunter"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Gastly"
	},


	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Will-O-Wisp"
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "Two Diamond",
	boosters: [Mewtwo]
}

export default card
