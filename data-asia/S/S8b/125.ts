import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伊布"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "由於不穩定的基因，蘊含著各式各樣進化可能性的特殊寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "布搜索"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張「寶可夢【V】」卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "踩"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card