import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪力露"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'zh-tw': "很能彈開水的體毛就算是從寒冷的海裡上岸時也能立刻乾掉，一點都不冷。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "直衝水"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "一同滾動"
		},

		effect: {
			'zh-tw': "造成自己的備戰區的，持有「一同滾動」招式的寶可夢的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card