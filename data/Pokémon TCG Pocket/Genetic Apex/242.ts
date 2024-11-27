import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Golbat"
	},

	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Wing Attack"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "One Star"
}

export default card
