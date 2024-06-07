import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "比克提尼"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "如果分享到比克提尼產出的無限能量，全身就會充滿力量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "熱情加油"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張基本能量卡，附於備戰寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "火焰"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card