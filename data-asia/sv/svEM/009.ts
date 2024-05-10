import { Card } from "../../../interfaces"
import Set from "../svEM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咚咚鼠"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "由於體型嬌小，發電器官尚未發達，因此會用尾巴 吸取住家的電力來充電。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "小使者"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "旋轉迴旋"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card