import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Swanna"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Wing Attack"
		},

		damage: "70"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
