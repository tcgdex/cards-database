import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Seel"
	},

	illustrator: "Masako Yamashita",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Headbutt"
		},

		damage: "30"
	}],

	retreat: 2,
	rarity: "One Diamond",
	boosters: [Pikachu]
}

export default card
