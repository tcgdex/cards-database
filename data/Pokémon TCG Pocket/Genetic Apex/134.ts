import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Swoobat"
	},

	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

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
