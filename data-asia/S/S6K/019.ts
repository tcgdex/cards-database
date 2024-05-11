import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "茸茸羊"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'zh-tw': "會將電力儲存在鬆軟的毛中。因為儲存了太多電力，身上有些地方變得光禿禿的。"
	},

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