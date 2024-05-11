import { Card } from "../../../interfaces"
import Set from "../SLL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飛天螳螂"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "雙臂的大鐮刀鋒利程度堪比神兵利器。動作迅捷靈敏，沒有獵物能逃出其指掌。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "高速鐮"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card