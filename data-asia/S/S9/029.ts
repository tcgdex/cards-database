import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "浮潛鼬"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "在追逐水中獵物的過程中，浮囊變得更加發達。 可以像橡皮艇一樣讓人乘坐。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "浮出"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張物品卡，在給對手看過後加入手牌。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "水槍"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card