import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "麻麻小魚"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],

	description: {
		'zh-tw': "由於只能放出微弱的電，所以會由許多麻麻小魚聚集起來， 放出強大的電流。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼喚信號"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【雷】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "小電氣"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card