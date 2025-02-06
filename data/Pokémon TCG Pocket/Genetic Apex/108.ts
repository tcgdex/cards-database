import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Eelektrik"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",
	evolveFrom: {
		en: "Tynamo"
	},


	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Head Bolt"
		},

		damage: "40"
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card
