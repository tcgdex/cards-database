import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熾焰咆哮虎V"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "宏偉火焰"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張【火】能量卡，附於1隻備戰寶可夢身上。"
		},

		damage: 90,
		cost: ["Fire", "Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "閃焰驅動者"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 220,
		cost: ["Fire", "Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
