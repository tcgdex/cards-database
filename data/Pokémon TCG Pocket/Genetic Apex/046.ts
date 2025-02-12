import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Sky Attack"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing"
		},

		damage: "130"
	}],

	retreat: 1,
	rarity: "Three Diamond",
	boosters: [Charizard]
}

export default card
