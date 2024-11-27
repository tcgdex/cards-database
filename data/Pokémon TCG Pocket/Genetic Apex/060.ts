import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Poliwhirl"
	},

	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Knuckle Punch"
		},

		damage: "40"
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card
