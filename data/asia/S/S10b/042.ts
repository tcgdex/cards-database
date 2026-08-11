import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿羅拉 拉達"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "每天夜裡都會為了尋找食物而潛入人們家中。牠們的大量出現已經成了社會問題。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "找出"
		},

		effect: {
			'zh-tw': "從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "怒之門牙"
		},

		effect: {
			'zh-tw': "在對手的戰鬥寶可夢身上放置傷害指示物直到剩餘HP變為「10」為止。"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card