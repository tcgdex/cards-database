import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風速狗"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'zh-tw': "只需要一晝夜時間就能跑完１００００公里的身影令許多人為之沉醉。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "火焰纏身"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張【火】能量卡，附於這隻寶可夢身上。"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "鬥志衝撞"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【V】」，則增加100點傷害。"
		},

		damage: "100+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card