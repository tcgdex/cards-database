import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Dragonair"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	evolveFrom: {
		en: "Dratini"
	},

	description: {
		en: "They say that if it emits an aura from its whole\nbody, the weather will begin to change instantly."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Waterfall"
		},

		damage: 60,
		cost: ["Water", "Lightning"]
	}],

	retreat: 1
}

export default card