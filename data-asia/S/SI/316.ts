import { Card } from "../../../interfaces"
import Set from "../SI"

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

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "蒼空波動"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。將自己的手牌全部丟棄，從牌庫抽出3張卡。"
		}
	}],

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