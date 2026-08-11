import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈空坐VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "極巨爆破"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的【火】或者【雷】任一屬性的任意數量的基本能量卡丟棄，增加其張數×80點傷害。"
		},

		damage: "20+",
		cost: ["Fire", "Lightning"]
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card