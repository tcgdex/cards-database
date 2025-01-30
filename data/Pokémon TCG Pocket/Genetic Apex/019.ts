import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Weepinbell"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Bellsprout"
	},

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Razor Leaf"
		},

		damage: "40"
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card
