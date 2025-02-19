import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Frogadier"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Froakie"
	},


	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Water Drip"
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "Two Diamond",
	boosters: [Charizard]
}

export default card
