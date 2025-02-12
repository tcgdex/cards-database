import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Wigglytuff"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Jigglypuff"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hyper Voice"
		},

		damage: "60"
	}],

	retreat: 2,
	rarity: "One Diamond",
	boosters: [Pikachu]
}

export default card
