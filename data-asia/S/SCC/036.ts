import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪力露麗"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "肚子上像泡泡一樣的花紋在水中便成了隱藏自己身影的迷彩。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "潛入幫忙"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇寶可夢卡與支援者卡合計最多3張，在給對手看過後加入手牌。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "衝浪"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card