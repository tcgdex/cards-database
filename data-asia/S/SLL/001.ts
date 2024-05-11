import { Card } from "../../../interfaces"
import Set from "../SLL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飛天螳螂",
		ja: "ストライク"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "雙臂的大鐮刀鋒利程度堪比神兵利器。動作迅捷靈敏，沒有獵物能逃出其指掌。",
		ja: "腕の 大きな 鎌は 切れ味 鋭く 真に 恐ろしき 得物なり。 動き 俊敏にして 獲物 逃がすことなし。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "高速鐮",
			ja: "こうそくカマ"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [123]
}

export default card