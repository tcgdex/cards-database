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

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Head Bolt"
		},

		damage: "40"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Tynamo",
		fr: "Anchwatt",
		es: "Tynamo",
		it: "Tynamo",
		pt: "Tynamo",
		de: "Zapplardin"
	}
}

export default card
