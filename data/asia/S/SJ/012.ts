import { Card } from "../../../interfaces"
import Set from "../SJ"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "路卡利歐"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "操作一種被稱為波導的力量來進行狩獵。這種力量就連 巨大的岩石也能擊得粉碎。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "扣殺抽出"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出1張卡。"
		},

		damage: 40,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "關節衝擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 160,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card