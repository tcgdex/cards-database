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

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "They coil around foes and shock them with electricity-generating organs that seem simply to be circular patterns.",
	}
}

export default card
