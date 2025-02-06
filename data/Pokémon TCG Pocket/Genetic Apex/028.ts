import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Whimsicott"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Cottonee"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rolling Tackle"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
