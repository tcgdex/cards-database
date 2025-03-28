import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dragonair"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	stage: "Stage1",
	evolveFrom: {
		en: "Dratini"
	},

	attacks: [{
		cost: ["Water", "Lightning", "Colorless"],

		name: {
			en: "Tail Smack"
		},

		damage: "80"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "They say that if it emits an aura from its whole body, the weather will begin to change instantly.",
	}
}

export default card
