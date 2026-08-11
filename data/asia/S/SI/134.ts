import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "茸茸羊"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "電球"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card