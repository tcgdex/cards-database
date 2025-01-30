import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dubwool"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Wooloo"
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rolling Tackle"
		},

		damage: "80"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
