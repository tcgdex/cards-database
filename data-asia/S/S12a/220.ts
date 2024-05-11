import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捷拉奧拉VSTAR"
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "粉碎律動"
		},

		effect: {
			'zh-tw': "若希望，將場上的競技場卡丟棄。"
		},

		damage: 190,
		cost: ["Lightning", "Lightning", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]雷霆星星"
		},

		effect: {
			'zh-tw': "選擇4次對手的寶可夢，對所選的所有寶可夢不計算弱點・抵抗力，造成其選擇次數×60點傷害。（1隻可選擇2次以上。）[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		cost: ["Lightning", "Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card