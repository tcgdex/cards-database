import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪絨蛾"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "冰凍之風"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "暴雪閉環"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部放回手牌。"
		},

		damage: 160,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card