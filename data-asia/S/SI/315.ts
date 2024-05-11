import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈空坐V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 210,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "龍之波動"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方2張卡丟棄。"
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "螺旋爆破"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢身上附加的【火】或者【雷】任一屬性的最多2張基本能量卡丟棄，增加其張數×80點傷害。"
		},

		damage: "20+",
		cost: ["Fire", "Lightning"]
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card