import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飛天螳螂"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "雙臂的大鐮刀鋒利程度堪比神兵利器。動作迅捷靈敏， 沒有獵物能逃出其指掌。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "快速攻擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card