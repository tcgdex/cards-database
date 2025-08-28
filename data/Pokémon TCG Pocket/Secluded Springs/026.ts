import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Tynamo"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		en: "While one alone doesn't have much power,\na chain of many Tynamo can be as powerful\nas lightning."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tiny Bolt"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0
}

export default card