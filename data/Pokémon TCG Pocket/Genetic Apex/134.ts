import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Swoobat"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Woobat"
	},


	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Heart Stamp"
		},

		damage: "60"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
