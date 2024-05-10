import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "迷你龍"
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		'zh-tw': "會在直瀉而下的瀑布保護下反覆蛻皮， 使身體變得越來越大。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "尾鞭"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card