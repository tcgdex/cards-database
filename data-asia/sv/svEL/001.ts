import { Card } from "../../../interfaces"
import Set from "../svEL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鴨嘴火獸"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "全身時時刻刻都在燃燒。人們認為牠是引起火災的 原因之一，非常畏懼牠。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼喚"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出1張卡。"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "吐火"
		},

		damage: 40,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card