import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tackle"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Mewtwo]
}

export default card
