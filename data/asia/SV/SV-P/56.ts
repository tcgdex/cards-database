import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "摩托蜥"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "似乎自古就會讓人類坐在背上。１萬年前的 壁畫上描繪著該模樣。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "騰騰衝刺"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，從自己的牌庫抽出與正面出現的次數相同數量的卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "力量衝撞"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card