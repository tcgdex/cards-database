import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "一擊武道熊師V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "磨礪"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【鬥】能量卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "衝擊打擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「衝擊打擊」。"
		},

		damage: 180,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card