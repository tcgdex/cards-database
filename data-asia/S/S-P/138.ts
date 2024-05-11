import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "皮卡丘們把尾巴貼在一起交換電流，其實是在互相打招呼。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "帶電"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張【雷】能量卡，附於這隻寶可夢身上。"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "電球"
		},

		damage: 30,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card