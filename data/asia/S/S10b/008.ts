import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小火龍"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'zh-tw': "天生喜歡熱熱的東西。據說當牠被雨淋濕的時候，尾巴的末端會冒出煙來。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "燃燒之尾"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【火】能量卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		damage: 10,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card