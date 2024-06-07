import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "愛心魚"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "溫暖海域的珊瑚礁是 牠的棲息地。最喜歡在 太陽珊瑚的枝條間睡覺。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "情侶裝"
		},

		effect: {
			'zh-tw': "雙方玩家一邊從各自的牌庫抽出2張卡，一邊互看正面。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撞擊"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card