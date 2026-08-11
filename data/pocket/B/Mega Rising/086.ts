import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Shinx"
	},

	illustrator: "Uta",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [403],
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "The extension and contraction of its muscles\ngenerates electricity. Its fur glows when it's\nin trouble."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flop"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card