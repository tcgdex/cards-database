import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "呆殼獸"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "被大舌貝咬住尾巴而進化。大舌貝陶醉在尾巴滲出的甜味裡，彷彿置身夢境。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "轉轉衝撞"
		},

		effect: {
			'zh-tw': "將雙方的戰鬥寶可夢【睡眠】。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "黃昏耀閃"
		},

		effect: {
			'zh-tw': "這個招式只有在對手剩餘獎賞卡的張數為1張時才可使用。獲得2張自己的獎賞卡。"
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card