import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "恰雷姆V"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "瑜伽閉環"
		},

		effect: {
			'zh-tw': "在對手的1隻寶可夢身上放置2個傷害指示物。若對手的寶可夢因這個招式【氣絕】了，則這個回合結束後，再開始1次自己的回合。在上個自己的回合，若自己的寶可夢使用了「瑜伽閉環」，則無法使用這個招式。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "衝天粉碎"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card