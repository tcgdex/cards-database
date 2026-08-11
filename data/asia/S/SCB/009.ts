import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熱帶龍"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "脖子上的美味水果很受歡迎。在溫暖的地區有很多養殖熱帶龍的牧場。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "戴葉子"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張【草】能量卡，以任意方式附於備戰寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "起風"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card