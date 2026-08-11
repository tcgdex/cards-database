import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "勾魂眼V"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "搜尋礦脈"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張訓練家卡，在給對手看過後加入手牌。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "瘋狂銳爪"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×60點傷害。"
		},

		damage: "10+",
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
