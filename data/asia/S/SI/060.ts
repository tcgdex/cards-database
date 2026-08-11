import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "比克提尼VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 310,
	types: ["Fire"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "火焰鋪展"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多3張【火】能量卡，以任意方式附於自己的寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "極巨勝利"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【V】」，則增加120點傷害。"
		},

		damage: "100+",
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card