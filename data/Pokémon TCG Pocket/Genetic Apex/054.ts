import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Wartortle"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Squirtle"
	},


	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Wave Splash"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
