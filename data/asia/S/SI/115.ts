import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡璞・鰭鰭"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "粉碎迴轉"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "大洋閉環"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，放回手牌。"
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card